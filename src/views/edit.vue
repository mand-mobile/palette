<template>
  <div class="palette-edit clearfix" :style="{height: `${innerHeight}px`}">
    <div class="palette-edit-preview">
      <div class="palette-edit-preview-inner">
        <img
          class="palette-edit-preview-frame"
          src="//didi.github.io/cube-ui/img/iphoneX.38c8778.png"
          alt=""
        >
        <div class="palette-edit-preview-box">
          <component v-bind:is="previewDemo"></component>
        </div>
        <div class="palette-edit-decorate"></div>
        <div class="palette-edit-preview-tip">
          * 页面展示按照<span>devicePixelRatio = 2</span>进行了等比缩放
        </div>
      </div>
    </div>
    <div class="palette-edit-content">
      <div class="palette-edit-content-inner">
        <h1 class="palette-edit-title">{{itemName}}</h1>
        <div class="palette-edit-form clearfix" :key="tmp">
          <template v-for="(value, name) in styleVariable">
            <div
              v-if="tmpStyleVariable[name]"
              :key="`variable-${name}`"
              class="palette-edit-item"
            >
              <div for="" class="item-label">
                {{name}}
                <span v-if="styleVariableInfo[name].text">
                  {{styleVariableInfo[name].text}}
                </span>
              </div>
              <el-color-picker
                v-if="styleVariableInfo[name].type === 'color'"
                v-model="tmpStyleVariable[name].value"
                size="mini"
                show-alpha
                @change="onStyleValueChange(name, $event)"
              >
              </el-color-picker>
              <el-input
                v-else
                v-model="tmpStyleVariable[name].value"
                size="mini"
                @blur="onStyleValueChange(name, tmpStyleVariable[name].value)"
              ></el-input>
              <div class="item-operator">
                <el-tooltip
                  v-if="tmpStyleVariable[name].from"
                  class="item"
                  effect="dark"
                  :content="`编辑全局变量${tmpStyleVariable[name].from}`"
                  placement="bottom"
                >
                  <i class="item-tip" @click="goToOther(tmpStyleVariable[name].from)">
                    <i class="el-icon-share"></i> {{ tmpStyleVariable[name].from }}
                  </i>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="恢复默认" placement="bottom">
                  <i class="item-tip" @click="resetStyleValue(name)">
                    <i class="item-tool el-icon-refresh"></i> 重置
                  </i>
                </el-tooltip>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="palette-edit-boxshadow"></div>
    <div class="palette-edit-operate">
      <el-button
        v-if="lastRoute"
        size="medium"
        round
        @click="goBack"
      >
        返回{{lastRoute.itemName}}
      </el-button>
      <el-button
        type="danger"
        size="medium"
        round
        @click="closeEditor"
      >
        关闭编辑器
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Demo from '../demos/agree'
import { defaultTheme, styleVariableInfo } from '../data'
import {
  generateCssVariable,
  insertCssVariable,
  findKeyValue,
  findKeyFrom
} from '../utils'

export default {
  name: 'palette-edit',
  data () {
    return {
      innerHeight: window.innerHeight - 120,
      themeIndex: this.$route.query.themeIndex,
      moduleName: this.$route.query.moduleName,
      itemName: this.$route.query.itemName,
      tmpStyleVariable: {},
      tmp: Date.now(),
      lastRoute: null,
      previewDemo: Demo
    }
  },
  computed: {
    ...mapState(['themes', 'styleVariableInfo']),
    theme () {
      const themeIndex = this.themeIndex
      if (themeIndex < 0) {
        return null
      } else {
        return this.themes[themeIndex]
      }
    },
    styleVariable () {
      if (this.themeIndex < 0) {
        return null
      } else {
        return this.theme.data[this.moduleName][this.itemName]
      }
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.innerHeight = window.innerHeight - 120
    })
    this.initCssVariable()
    this.initStyleValue()
  },
  methods: {
    ...mapMutations(['updateTheme']),

    onStyleValueChange (name, value) {
      if (this.getStyleValue(name) !== value) {
        this.updateTheme({
          themeIndex: this.themeIndex,
          moduleName: this.moduleName,
          itemName: this.itemName,
          name,
          value
        })
      }
    },

    initCssVariable () {
      if (this.theme) {
        const variables = generateCssVariable(this.theme.data)
        insertCssVariable(variables)
      }
    },

    // load new module & item style variables
    loadStyleVariable (moduleName, itemName) {
      this.moduleName = moduleName
      this.itemName = itemName
      this.initStyleValue()

      // this.$router.replace({
      //   path: 'edit',
      //   query: {
      //     themeIndex: this.themeIndex,
      //     moduleName: this.moduleName,
      //     itemName: this.itemName
      //   }
      // })
    },

    initStyleValue () {
      const styleVariable = this.styleVariable

      if (!styleVariable) {
        return
      }
      for (const name in styleVariable) {
        if (styleVariable.hasOwnProperty(name)) {
          const styleValue = styleVariable[name]
          this.tmpStyleVariable[name] = {
            value: this.getStyleValue(name),
            from: styleVariableInfo.hasOwnProperty(styleValue) ? styleValue : ''
          }
        }
      }

      this.tmp = Date.now()
    },
    getStyleValue (name) {
      const styleVariable = this.styleVariable
      let styleValue = styleVariable[name]

      // Find value when the value is a basic variable
      if (styleVariableInfo.hasOwnProperty(styleValue)) {
        styleValue = findKeyValue(this.theme.data, styleValue)
      }

      return styleValue
    },
    resetStyleValue (name) {
      const defaultValue = findKeyValue(defaultTheme, name)
      // reset theme variable
      this.updateTheme({
        themeIndex: this.themeIndex,
        moduleName: this.moduleName,
        itemName: this.itemName,
        name,
        value: defaultValue
      })

      // reset temporary variable
      this.$set(this.tmpStyleVariable, name, {
        ...this.tmpStyleVariable[name],
        value: this.getStyleValue(name)
      })

      this.tmp = Date.now()
    },

    goToOther (key) {
      const path = findKeyFrom(this.theme.data, key)
      // temporarily save current route info
      this.lastRoute = {
        themeIndex: this.themeIndex,
        moduleName: this.moduleName,
        itemName: this.itemName
      }
      this.loadStyleVariable(path[0], path[1])
    },
    goBack () {
      this.loadStyleVariable(this.lastRoute.moduleName, this.lastRoute.itemName)
      this.lastRoute = null
    },
    closeEditor () {
      this.$router.replace({
        path: 'list',
        query: {
          themeIndex: this.themeIndex
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.palette-edit
  position relative
  box-sizing border-box
  // background #FFF
  overflow hidden
  .palette-edit-preview
    float left
    width 432px
    height 100%
    overflow scroll
    &::-webkit-scrollbar
      display none
    .palette-edit-preview-inner
      position relative
      padding 30px 0 50px
      .palette-edit-preview-frame
        width 100%
      .palette-edit-preview-box
        position absolute
        z-index 2
        top 116px
        left 14px
        width 375px
        height 740px
        margin 0 14px
        // padding 80px 0 0
        background #fbfbfb
        // opacity .5
        box-sizing border-box
        border-radius 0 0 56px 56px
        overflow hidden
        .palette-demo
          padding 20px
          box-sizing border-box
          zoom calc(375/750)
      .palette-edit-decorate
        position absolute
        z-index 3
        left 50%
        bottom 95px
        width 120px
        height 5px
        margin-left -60px
        border-radius 5px
        background #666
      .palette-edit-preview-tip
        margin-top 10px
        font-size 12px
        text-align center
        color #999
        span
          padding 0 5px
          font-style italic
  .palette-edit-content
    position relative
    height 100%
    padding-left 50px
    box-sizing border-box
    overflow scroll
    &::-webkit-scrollbar
      display none
    .palette-edit-content-inner
      padding 30px 0 50px
      .palette-edit-title
        font-size 28px
        color #333
        .current-theme
          font-size 14px
          color #999
          line-height 34px
      .palette-edit-form
        .palette-edit-item
          position relative
          float left
          width 100%
          margin-top 15px
          .item-label
            float left
            width 100%
            line-height 40px
            font-size 14px
            span
              margin-left 10px
              font-size 12px
              color #999
              &:before
                content '/ '
          .item-operator
            float left
            display none
          .item-tip
            float left
            margin-left 15px
            color #999
            font-size 12px
            font-style normal
            cursor pointer
          .item-tool
            position relative
            float left
            top 2px
            margin-right 5px
            color #ccc
          .el-color-picker
            float left
          .el-input
            float left
            width 140px
            overflow hidden
          &:hover
            .item-operator
              display block
  .palette-edit-operate
    position absolute
    right 0
    top 30px
  .palette-edit-boxshadow
    position absolute
    bottom -10px
    left 0
    right 0
    height 60px
    background linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 60%)
    // opacity .9
</style>

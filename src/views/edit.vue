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
                size="medium"
                show-alpha
                @change="onVariableChange(name, $event)"
              >
              </el-color-picker>
              <el-input
                v-else
                v-model="tmpStyleVariable[name].value"
                @blur="onVariableChange(name, tmpStyleVariable[name])"
              ></el-input>
              <div class="item-operator">
                <el-tooltip
                  v-if="tmpStyleVariable[name].from"
                  class="item"
                  effect="dark"
                  :content="`也可直接更改全局变量${tmpStyleVariable[name].from}`"
                  placement="bottom"
                >
                  <i class="item-tip">
                    <i class="el-icon-star-off"></i> {{ tmpStyleVariable[name].from }}
                  </i>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="恢复默认" placement="bottom">
                  <i class="item-tip">
                    <i class="item-tool el-icon-refresh"></i> 重置
                  </i>
                </el-tooltip>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="palette-edit-operate">
        <el-tooltip class="item" effect="dark" content="关闭编辑主题" placement="bottom">
          <i class="close-theme el-icon-close"></i>
        </el-tooltip>
      </div>
    </div>
    <div class="palette-edit-boxshadow"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Demo from '../demos/button'
import { styleVariableInfo } from '../data'
import { generateCssVariable, insertCssVariable, findKeyValue } from '../utils'

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
    initStyleValue () {
      const styleVariable = this.styleVariable
      if (!styleVariable) {
        return
      }
      for (const name in styleVariable) {
        if (styleVariable.hasOwnProperty(name)) {
          let styleValue = styleVariable[name]
          let from = ''
          if (styleVariableInfo.hasOwnProperty(styleValue)) {
            from = styleValue
            styleValue = findKeyValue(this.theme.data, from)
          }
          this.tmpStyleVariable[name] = {
            value: styleValue,
            from
          }
        }
      }
      this.tmp = Date.now()
    },
    initCssVariable () {
      if (this.theme) {
        const variables = generateCssVariable(this.theme.data)
        insertCssVariable(variables)
      }
    },
    onVariableChange (name, value) {
      this.updateTheme({
        themeIndex: this.themeIndex,
        moduleName: this.moduleName,
        itemName: this.itemName,
        name,
        value
      })
    }
  }
}
</script>

<style lang="stylus">
.palette-edit
  position relative
  box-sizing border-box
  overflow hidden
  .palette-edit-preview
    float left
    width 432px
    height 100%
    overflow scroll
    .palette-edit-preview-inner
      position relative
      padding 30px 0 50px
      .palette-edit-preview-frame
        width 100%
      .palette-edit-preview-box
        position absolute
        z-index 2
        top 36px
        left 12.5px
        width 403px
        height 830px
        padding 80px 14px 0
        // background red
        // opacity .5
        box-sizing border-box
        border-radius 56px
        .palette-demo
          zoom calc(375/750)
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
            font-size 16px
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
            width 180px
            overflow hidden
          &:hover
            .item-operator
              display block
          // .reset-theme
          //   position absolute
          //   right 0
          //   top 0
          //   .el-input__inner
          //     border none
          //     border-bottom solid 1px #f0f0f0
    .palette-edit-operate
      position absolute
      right 0
      top 0
      i
        margin-left 10px
        font-size 16px
        cursor pointer
  .palette-edit-boxshadow
    position absolute
    bottom -10px
    left 0
    right 0
    height 60px
    background linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 60%)
    // opacity .9
</style>

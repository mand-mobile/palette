<template>
  <div class="palette-edit clearfix" :style="{height: `${innerHeight}px`}">
    <div class="palette-edit-preview">
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
    <div class="palette-edit-content">
      <h1 class="palette-edit-title">{{itemName}}</h1>
      <div class="palette-edit-form clearfix" :key="tmp">
        <div
          v-for="(value, name) in styleVariable"
          :key="`variable-${name}`"
          class="palette-edit-item"
        >
          <div for="" class="item-label">
            {{name}}
            <span>{{styleVariableInfo[name].text}}</span>
          </div>
          <el-color-picker
            v-if="styleVariableInfo[name].type === 'color'"
            v-model="tmpStyleVariable[name]"
            show-alpha
          >
          </el-color-picker>
          <el-input
            v-else
            v-model="tmpStyleVariable[name]"
          ></el-input>
        </div>
        <!-- <div class="palette-edit-item">
          <label for="" class="item-label">number-keyboard-key-confirm-bg-tap</label>
          <el-input-number label="描述文字"></el-input-number>
        </div> -->
      </div>
      <div class="palette-edit-operate">
        <el-tooltip class="item" effect="dark" content="恢复默认主题" placement="bottom">
          <i class="reset-theme el-icon-refresh"></i>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="关闭编辑主题" placement="bottom">
          <i class="close-theme el-icon-close"></i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Demo from '../demos/button'
import { generateCssVariable, insertCssVariable } from '../utils'

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
    this.initStyleVariable()
  },
  methods: {
    initStyleVariable () {
      const styleVariable = this.styleVariable
      if (!styleVariable) {
        return
      }
      for (const name in styleVariable) {
        if (styleVariable.hasOwnProperty(name)) {
          this.tmpStyleVariable[name] = styleVariable[name]
        }
      }
      this.tmp = Date.now()
    },
    initCssVariable () {
      if (this.theme) {
        const variables = generateCssVariable(this.theme.data)
        insertCssVariable(variables)
      }
    }
  }
}
</script>

<style lang="stylus">
.palette-edit
  padding 30px 0
  box-sizing border-box
  overflow hidden
  .palette-edit-preview
    position relative
    float left
    width 432px
    height 100%
    .palette-edit-preview-frame
      width 100%
    .palette-edit-preview-box
      position absolute
      z-index 2
      top 6px
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
    .palette-edit-title
      font-size 28px
      color #333
      .current-theme
        font-size 14px
        color #999
        line-height 34px
    .palette-edit-form
      .palette-edit-item
        float left
        width 100%
        margin-top 15px
        .item-label
          float left
          width 100%
          line-height 40px
          font-size 18px
          span
            margin-left 10px
            font-size 12px
            color #999
            &:before
              content '/ '
        .el-input
          width 180px
          overflow hidden
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
</style>

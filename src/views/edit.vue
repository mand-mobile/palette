<template>
  <div class="palette-edit clearfix" :style="{height: `${innerHeight}px`}">
    <div class="palette-edit-preview">
      <palette-previewer :name="demoName"></palette-previewer>
    </div>
    <div class="palette-edit-content">
      <transition name="slide-fade">
        <div class="palette-edit-content-inner" v-show="contentVisible">
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
                  <span v-if="styleVariableInfo[name]">
                    {{
                      lang === 'zh'
                      ? `/ ${styleVariableInfo[name].text || ''}`
                      : `/ ${styleVariableInfo[name].textEn || '-'}`
                    }}
                  </span>
                </div>
                <el-color-picker
                  v-if="styleVariableInfo[name] && styleVariableInfo[name].type === 'color'"
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
                    :content="`${$t('edit.tip')} ${tmpStyleVariable[name].from}`"
                    placement="bottom"
                  >
                    <i class="item-tip" @click="goToOther(tmpStyleVariable[name].from)">
                      <i class="el-icon-share"></i> {{ tmpStyleVariable[name].from }}
                    </i>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" :content="$t('edit.resetTip')" placement="bottom">
                    <i class="item-tip" @click="resetStyleValue(name)">
                      <i class="item-tool el-icon-refresh"></i> {{ $t('edit.resetBtn') }}
                    </i>
                  </el-tooltip>
                </div>
              </div>
            </template>
          </div>
        </div>
      </transition>
    </div>
    <div class="palette-edit-boxshadow"></div>
    <div class="palette-edit-operate">
      <el-button
        v-if="lastRoute"
        size="medium"
        round
        @click="goBack"
      >
        {{ `${$t('edit.backBtn')} ${lastRoute.itemName}` }}
      </el-button>
      <el-button
        type="danger"
        size="medium"
        round
        @click="closeEditor"
      >
        {{ $t('edit.closeBtn') }}
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import PalettePreviewer from '../components/previewer'
import { defaultTheme, styleVariableInfo } from '../data'
import {
  generateCssVariable,
  insertCss,
  findKeyValue,
  findKeyFrom
} from '../utils'

export default {
  name: 'palette-edit',
  components: {
    PalettePreviewer
  },
  data () {
    return {
      innerHeight: window.innerHeight - 120,
      themeIndex: this.$route.query.themeIndex,
      moduleName: this.$route.query.moduleName,
      itemName: this.$route.query.itemName,
      demoName: this.$route.query.itemName,
      tmpStyleVariable: {},
      tmp: Date.now(),
      lastRoute: null,
      contentVisible: false
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
      if (this.themeIndex < 0 || !this.theme) {
        return null
      } else {
        return this.theme.data[this.moduleName][this.itemName]
      }
    },
    lang () {
      return this.$i18n.locale
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.innerHeight = window.innerHeight - 120
    })
    this.initCss()
    this.initCssVariable()
    this.initStyleValue()
    this.contentVisible = true
  },
  methods: {
    ...mapMutations(['updateThemeVariables']),
    ...mapActions({
      getMandMobileCss: 'GET_MAND_MOBILE_CSS',
      saveThemeStore: 'SAVE_THEMES_STORE'
    }),

    onStyleValueChange (name, value) {
      if (this.getStyleValue(name) !== value) {
        this.updateThemeVariables({
          themeIndex: this.themeIndex,
          moduleName: this.moduleName,
          itemName: this.itemName,
          name,
          value
        })
        this.saveThemeStore()
      }
    },

    initCss () {
      if (!this.theme) {
        return
      }
      this.getMandMobileCss({
        themeIndex: this.themeIndex,
        type: 'lib'
      }).then(res => {
        if (res.status === 200 && res.data) {
          insertCss(res.data, 'mand-mobile-css', false)
        } else {
          this.$message.error(this.$t('edit.cssError').replace('xxxxx', `mand-mobile v${this.theme.version} css file`))
        }
      })
    },
    initCssVariable () {
      if (this.theme) {
        const variables = generateCssVariable(this.theme.data)
        insertCss(variables, 'theme-style-variable')
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
      this.updateThemeVariables({
        themeIndex: this.themeIndex,
        moduleName: this.moduleName,
        itemName: this.itemName,
        name,
        value: defaultValue
      })
      this.saveThemeStore()

      // reset temporary variable
      this.$set(this.tmpStyleVariable, name, {
        ...this.tmpStyleVariable[name],
        value: this.getStyleValue(name)
      })

      this.tmp = Date.now()
    },

    goToOther (key) {
      this.contentVisible = false
      const path = findKeyFrom(this.theme.data, key)
      // temporarily save current route info
      this.lastRoute = {
        themeIndex: this.themeIndex,
        moduleName: this.moduleName,
        itemName: this.itemName
      }
      setTimeout(() => {
        this.loadStyleVariable(path[0], path[1])
        this.contentVisible = true
      }, 200)
    },
    goBack () {
      this.contentVisible = false
      setTimeout(() => {
        this.loadStyleVariable(this.lastRoute.moduleName, this.lastRoute.itemName)
        this.lastRoute = null
        this.contentVisible = true
      }, 200)
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
    bottom -20px
    left 0
    right 0
    height 60px
    background linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 60%)
    border-radius 0 0 60px 60px
    // opacity .9
  .slide-fade-enter-active, .slide-fade-leave-active
    transition all .2s ease
  .slide-fade-enter
    transform translateX(10px)
    opacity 0
  .slide-fade-leave-to
    transform translateX(-10px)
    opacity 0
</style>

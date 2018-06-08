<template>
  <div class="palette-header">
    <el-col :span="12">
      <div class="palette-header-logo"></div>
      <div class="palette-header-name">Mand Mobile <span>Palette</span></div>
      <div class="palette-header-version">v1.0.0-beta</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <div class="palette-header-github palette-header-operater">
          <a href="https://github.com/mand-mobile/palette" target="_blank"></a>
        </div>
        <div class="palette-header-lang palette-header-operater" @click="changeLang">
          <div class="operater-select">
            <span>{{ switchLang }}</span>
          </div>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import { Header } from 'element-ui'
import { localStore } from '../utils'

export default {
  name: 'palette-header',
  components: {
    [Header.name]: Header
  },
  computed: {
    switchLang () {
      return this.$i18n.locale === 'zh' ? 'English' : '中文'
    }
  },
  mounted () {
    console.log()
  },
  methods: {
    changeLang () {
      const lang = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = lang
      localStore('lang', lang)
    }
  }
}
</script>

<style lang="stylus">
.palette-header
  min-width 1000px
  overflow hidden
  .palette-header-logo
    float left
    width 30px
    height 30px
    margin 15px 0
    background url(//manhattan.didistatic.com/static/manhattan/do1_KC5q8Qqsz8BnUPAsJY5i) no-repeat
    background-size contain
  .palette-header-name
    float left
    margin-left 10px
    font-family DINAlternate-Bold
    font-size 20px
    line-height 60px
    span
      color #048efa
      // font-style italic
  .palette-header-version
    float left
    margin-left 5px
    margin-top -2px
    padding 2px 5px
    font-size 12px
    font-weight 500
    color #FFF
    background #ccc
    border-bottom-left-radius 5px
    border-bottom-right-radius 5px
    transform scale(0.8)
  .palette-header-operater
    position relative
    float right
    width 80px
    height 30px
    margin-left 10px
    margin-top 17px
    line-height 30px
    text-align center
    border-radius 30px
    border solid 1px #ddd
    cursor pointer
    transition all .3s
    .operater-select
      font-size 12px
      color #048EFA
    &:hover
      opacity .5
    &.palette-header-github
      width 30px
      border none
      border-radius 0
      opacity .8
      a
        display inline-block
        width 100%
        height 100%
        background url('../assets/github.png') no-repeat
        background-size contain
        -webkit-filter invert(70%)
        filter invert(70%)
      &:hover
        opacity .5
</style>

<template>
  <div class="palette-home">
    <div class="palette-home-content">
      <div class="logo">
        <img src="//manhattan.didistatic.com/static/manhattan/do1_KC5q8Qqsz8BnUPAsJY5i" alt="">
        <i class="flash"></i>
      </div>
      <p class="name">Mand Mobile <span>Palette</span></p>
      <p class="describe"><span span v-html="$t('home.describe')"></span>，V<span>{{ version }}</span></p>
    </div>
    <a class="palette-home-github" href="https://github.com/mand-mobile/palette" target="_blank">
      <img src="https://img.shields.io/github/stars/mand-mobile/palette.svg?style=social&label=Stars" alt="">
    </a>
    <div class="palette-home-operate">
      <router-link to="/record">
        {{ $t('home.btn') }}
      </router-link>
      <a href="https://github.com/mand-mobile/palette" target="_blank">GITHUB</a>
    </div>
    <palette-animation-name></palette-animation-name>
    <p class="palette-home-copyright">Copyright © 2012-2018 Didi Chuxing. All Rights Reserved</p>
  </div>
</template>

<script>
import paletteAnimationName from '../components/animation-name'
export default {
  name: 'palette-home',
  components: {
    [paletteAnimationName.name]: paletteAnimationName
  },
  data () {
    return {
      version: process.env.version
    }
  }
}
</script>

<style lang="stylus">
.palette-home
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  display flex
  justify-content center
  align-items center
  flex-direction column
  .palette-home-content
    display flex
    flex-direction column
    align-items center
    .logo
      position relative
      width 80px
      overflow hidden
      border-radius 80px
      img
        width 100%
      .flash
        position absolute
        background #fff
        width 10px
        height 100%
        top 0
        left -50%
        opacity 0.3
        -webkit-transition all 0.25s ease-out
        transition all 1s ease-out
        -webkit-transform skewX(-25deg)
        transform skewX(-25deg)
        animation reflect 2s ease-in-out 1s
    .name
      margin-top 30px
      font-size 28px
      font-family DINAlternate-Bold,AvenirNext-Medium,Microsoft Yahei,Lato,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Verdana,Tahoma,sans-serif
      color #333
      span
        color #048efa
    .describe
      margin-top 10px
      color #999
      font-size 12px
      a
        margin 0 2px
        color #666
        font-weight 500
  .palette-home-operate
    display flex
    margin 30px 0
    a
      width 180px
      height 40px
      border solid .5px #ccc
      border-radius 2px
      text-align center
      line-height 40px
      -webkit-font-smoothing antialiased
      text-decoration none
      &:first-of-type
        margin-right 20px
        border-color #ab5ab3
        color #ab5ab3
      &:last-of-type
        border-color #759ce6
        color #759ce6
  .palette-home-github
    display flex
    margin-top 30px
  .palette-animation-name
    position absolute
    bottom 150px
    zoom .4
  .palette-home-copyright
    position absolute
    bottom 20px
    color #999
    font-size 12px

@-webkit-keyframes reflect
  0%
    left -100%
  100%
    left 200%
@keyframes reflect
  0%
    left -100%
  100%
    left 200%
</style>

<template>
  <div class="palette-home">
    <div class="palette-home-content">
      <img class="logo" src="//manhattan.didistatic.com/static/manhattan/do1_KC5q8Qqsz8BnUPAsJY5i" alt="">
      <p class="name">Mand Mobile <span>Paletee</span></p>
      <p class="describe"><span span v-html="$t('home.describe')"></span>，V<span>{{ version }}</span></p>
    </div>
    <div class="palette-home-operate">
      <router-link to="/record">
        {{ $t('home.btn') }}
      </router-link>
      <a href="https://github.com/mand-mobile/palette" target="_blank">GITHUB</a>
    </div>
    <paletee-animation-name></paletee-animation-name>
    <p class="palette-home-copyright">Copyright © 2012-2018 Didi Chuxing. All Rights Reserved</p>
  </div>
</template>

<script>
import paleteeAnimationName from '../components/animation-name'
export default {
  name: 'palette-home',
  components: {
    [paleteeAnimationName.name]: paleteeAnimationName
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
      width 80px
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
  .paletee-animation-name
    position absolute
    bottom 150px
    zoom .4
  .palette-home-copyright
    position absolute
    bottom 20px
    color #999
    font-size 12px
</style>

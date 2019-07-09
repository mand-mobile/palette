<template>
  <div class="palette-demo palette-demo-swiper cleafix">
    <md-swiper
      :is-prevent="false"
      :useNative-driver="false"
    >
      <md-swiper-item :key="$index" v-for="(item, $index) in simple">
        <div
          class="banner-item"
          :style="{'background': `${item.color}`}">{{item.text}}</div>
      </md-swiper-item>
    </md-swiper>
  </div>
</template>

<script>
import simple from 'mand-mobile/components/swiper/demo/data/simple'

export default {
  data () {
    return {
      simple
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-swiper
  height 250px
  .banner-item
    float left
    width 100%
    height 100%
    line-height 250px
    text-align center
    font-size 28px
    color #FFF
    box-align center
    align-items center
    box-pack center
    justify-content center
    text-decoration-line none
</style>

<template>
  <div class="palette-card" @click="$emit('click')">
    <!-- <img
      class="palette-card-img"
      :src="`//manhattan.didistatic.com/static/manhattan/mand/preview/${name}.jpg`"
      alt=""
    > -->
    <div class="palette-bottom">
      <p class="title clearfix">
        <span>{{name}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'palette-card',
  props: ['name']
}
</script>

<style lang="stylus">
.palette-card
  width 100%
  height 100%
  background #FFF
  box-shadow 0 2px 8px #f0f1f2
  border-radius 4px
  overflow hidden
  cursor pointer
  .palette-card-img
    position relative
    top 50%
    width 100%
    transform translateY(-50%)
  .palette-bottom
    position absolute
    z-index 2
    bottom 0
    left 0
    width 100%
    background #FFF
    box-shadow 0 -10px 50px rgba(0,0,0,0.05)
    .title
      float left
      width 100%
      // height 20px
      padding 12px
      box-sizing border-box
      span
        float left
        width 100%
        font-size 14px
        color #999
        text-align center
      i
        float right
        font-size 12px
        font-style normal
        color #999
        line-height 20px
</style>

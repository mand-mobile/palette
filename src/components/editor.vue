<template>
  <div class="palette-editor">
    <div class="palette-editor-preview">
      <img src="//didi.github.io/cube-ui/img/iphoneX.38c8778.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'palette-editor'
}
</script>

<style lang="stylus">
.palette-editor
  width 100%
  padding 20px
  box-sizing border-box
  .palette-editor-preview
    float left
    width 375px
    height 100%
    img
      width 100%
</style>

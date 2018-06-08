<template>
  <div class="palette-demo palette-demo-tip cleafix">
    <div class="palette-demo-block">
      <div class="md-tip">
        Tip Text
        <md-icon name="cross" size="md"></md-icon>
      </div>
    </div>
    <div class="palette-demo-block">
      <div class="md-tip is-left">
        Tip Text
        <md-icon name="cross" size="md"></md-icon>
      </div>
    </div>
    <div class="palette-demo-block">
      <div class="md-tip is-right">
        Tip Text
        <md-icon name="cross" size="md"></md-icon>
      </div>
    </div>
    <div class="palette-demo-block">
      <div class="md-tip is-bottom">
        Tip Text
        <md-icon name="cross" size="md"></md-icon>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.palette-demo-tip
  .palette-demo-block
    display flex
    justify-content center
   .md-tip
    position relative
    margin-top 50px
</style>

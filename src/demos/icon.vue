<template>
  <div class="palette-demo palette-demo-icon cleafix">
    <div class="palette-demo-block">
      <div class="icon-list">
        <md-icon name="circle-right" size="xs"></md-icon>
        <md-icon name="circle-cross" size="xs"></md-icon>
        <md-icon name="circle-alert" size="xs"></md-icon>
      </div>
      <p>xs</p>
    </div>
    <div class="palette-demo-block">
      <div class="icon-list">
        <md-icon name="circle-right" size="sm"></md-icon>
        <md-icon name="circle-cross" size="sm"></md-icon>
        <md-icon name="circle-alert" size="sm"></md-icon>
      </div>
      <p>sm</p>
    </div>
    <div class="palette-demo-block">
      <div class="icon-list">
        <md-icon name="circle-right" size="md"></md-icon>
        <md-icon name="circle-cross" size="md"></md-icon>
        <md-icon name="circle-alert" size="md"></md-icon>
      </div>
      <p>md</p>
    </div>
    <div class="palette-demo-block">
      <div class="icon-list">
        <md-icon name="circle-right" size="lg"></md-icon>
        <md-icon name="circle-cross" size="lg"></md-icon>
        <md-icon name="circle-alert" size="lg"></md-icon>
      </div>
      <p>lg</p>
    </div>
  </div>
</template>

<style lang="stylus">
.palette-demo-icon
  margin-top 20%
  .palette-demo-block
    margin-top 50px
    display flex
    flex 1
    align-items center
    flex-direction column
    .md-icon
      color #ccc
    p
     color #666
</style>

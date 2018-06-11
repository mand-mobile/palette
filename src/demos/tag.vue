<template>
  <div class="palette-demo palette-demo-tag cleafix">
    <div class="palette-demo-block">
      <md-tag size="tiny" shape="circle" type="fill">2</md-tag>
      <md-tag size="small" shape="circle" type="fill">特惠</md-tag>
      <md-tag size="large" shape="circle" type="fill">返5000</md-tag>
      <md-tag size="small" shape="circle" type="ghost">特惠</md-tag>
    </div>
    <div class="palette-demo-block">
      <md-tag size="large" shape="fillet" type="fill" fill-color="#FC9153" font-weight="normal" font-color="#fff">字</md-tag>
      <md-tag size="large" shape="fillet" type="fill" fill-color="#50A050" font-weight="bold" font-color="#fff">字</md-tag>
      <md-tag size="large" shape="fillet" type="fill" fill-color="#91C6EF" font-weight="bolder" font-color="#fff">字</md-tag>
    </div>
    <div class="palette-demo-block">
      <md-tag size="large" shape="square" font-color="#3CA0E6" type="ghost">运营车</md-tag>
      <md-tag size="small" shape="square" font-color="#3CA0E6" type="ghost">运营车</md-tag>
    </div>
  </div>
</template>

<style lang="stylus">
.palette-demo-tag
  .palette-demo-block
    display flex
    justify-content center
    margin-top 60px
    .md-tag
      margin 0 10px
</style>

<template>
  <div class="palette-demo palette-demo-button cleafix">
    <div class="palette-demo-block">
      <md-button>Primary</md-button>
      <md-button disabled>Primary Disabled</md-button>
    </div>
    <div class="palette-demo-block">
      <md-button type="ghost">Ghost</md-button>
      <md-button type="ghost" disabled style="margin-left:10px">Ghost</md-button>
    </div>
    <div class="palette-demo-block">
      <md-button type="ghost" size="small">Ghost-S</md-button>
      <md-button type="ghost" size="small" disabled style="margin-left:10px">Ghost-S</md-button>
    </div>
    <div class="palette-demo-block">
      <md-button type="ghost-primary">Ghost-P</md-button>
      <md-button type="ghost-primary" disabled style="margin-left:10px">Ghost-P</md-button>
    </div>
    <div class="palette-demo-block">
      <md-button type="ghost-primary" size="small">Ghost-P-S</md-button>
      <md-button type="ghost-primary" size="small" disabled style="margin-left:10px">Ghost-P-S</md-button>
    </div>
    <div class="palette-demo-block">
      <md-button type="link">阅读全文</md-button>
      <md-button type="link" icon="hollow-plus">加入收藏</md-button>
      <md-button type="link" disabled>评论</md-button>
    </div>
  </div>
</template>

<style lang="stylus">
.palette-demo-button
  .palette-demo-block
    float left
    width 100%
    margin-top 25px
    .md-button
      float left
      margin-top 20px
</style>

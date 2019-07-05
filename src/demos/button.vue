<template>
  <div class="palette-demo palette-demo-button clearfix">
    <div class="palette-demo-block">
      <md-button type="default">Default</md-button>
      <md-button type="default" inactive>Default Inactive</md-button>
      <md-button type="primary">Primary</md-button>
      <md-button type="primary" inactive>Primary Inactive</md-button>
      <md-button type="warning">Warning</md-button>
      <md-button type="warning" inactive>Warning Inactive</md-button>
      <md-button type="disabled">Disabled</md-button>   
    </div>
    <div class="palette-demo-block">
      <md-button type="default" plain>Default & Plain</md-button>
      <md-button type="primary" plain>Primary & Plain</md-button>
      <md-button type="warning" plain>Warning & Plain</md-button>
      <md-button type="disabled" plain>Disabled & Plain</md-button>
      <md-button type="primary" plain round>Primary & Plain & Round</md-button>
    </div>
    <div class="palette-demo-block">
      <md-button type="default" round>Default & Round</md-button>
      <md-button type="primary" round>Primary & Round</md-button>
      <md-button type="warning" round>Warning & Round</md-button>
      <md-button type="disabled" round>Disabled & Round</md-button>
    </div>
    <div class="palette-demo-block">
      <md-button type="primary" icon="edit" inline>Inline Primary</md-button>
      <md-button type="primary" inline plain>Inline Plain</md-button>
    </div>
    <div class="palette-demo-block">
      <md-button type="warning" size="small" inline>Warning</md-button>
      <md-button type="disabled" size="small" inline>Disabled</md-button>
    </div>
    <div class="palette-demo-block">
      <md-button type="link" icon="message">评论</md-button>
      <md-button type="link" inactive>去看看<md-icon name="arrow-right" size="md"></md-icon></md-button>
    </div>
  </div>
</template>

<style lang="stylus">
.palette-demo-button
  .palette-demo-block
    float left
    width 100%
    margin-bottom 45px
    .md-button
      float left
      margin-top 20px
</style>

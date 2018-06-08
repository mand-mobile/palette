<template>
  <div class="palette-demo palette-demo-switch cleafix">
    <div class="palette-demo-block">
      <md-switch value></md-switch>
    </div>
    <div class="palette-demo-block">
      <md-switch :value="false"></md-switch>
    </div>
    <div class="palette-demo-block">
      <md-switch :value="true" disabled></md-switch>
    </div>
  </div>
</template>

<style lang="stylus">
.palette-demo-switch
  .palette-demo-block
    display flex
    justify-content center
    margin-top 30px
</style>

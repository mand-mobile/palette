<template>
  <div class="palette-demo palette-demo-codebox cleafix">
    <div class="palette-demo-block cleafix">
      <md-codebox system autofocus/>
    </div>
    <div class="palette-demo-block cleafix">
      <md-codebox system mask/>
    </div>
    <div class="palette-demo-block cleafix">
      <md-codebox :maxlength="-1" system/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.palette-demo-codebox
  .palette-demo-block
    margin-top 50px
</style>

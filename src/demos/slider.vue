<template>
  <div class="palette-demo palette-demo-slider cleafix">
    <md-slider v-model="quantity"></md-slider>
  </div>
</template>

<script>
export default {
  data () {
    return {
      quantity: 25
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-slider
  .md-slider
    margin-top 50px
</style>

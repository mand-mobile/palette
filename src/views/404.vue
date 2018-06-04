<template>
  <div class="palette-404">
    <palette-status
      imgUrl="//manhattan.didistatic.com/static/manhattan/mfd/result-page/lost"
      describe="空空如也, 一切的星光都已陨灭"
    ></palette-status>
  </div>
</template>

<script>
import PaletteStatus from '../components/status'

export default {
  components: {
    PaletteStatus
  }
}
</script>

<style lang="stylus">
.palette-404 .palette-status
  margin-top 200px
</style>

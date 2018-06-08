<template>
  <div class="palette-404">
    <palette-status
      imgUrl="//manhattan.didistatic.com/static/manhattan/mfd/result-page/lost"
      :describe="$t('record.errorTip')"
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

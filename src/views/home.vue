<template>
  <div class="palette-home">
    <paletee-animation-name></paletee-animation-name>
  </div>
</template>

<script>
import paleteeAnimationName from '../components/animation-name'
export default {
  name: 'palette-home',
  components: {
    [paleteeAnimationName.name]: paleteeAnimationName
  }
}
</script>

<style lang="stylus">

</style>

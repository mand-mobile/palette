<template>
  <div class="palette-demo palette-demo-popup cleafix">
    <md-button @click="value = true">Show Popup</md-button>
    <md-popup
      v-model="value"
      position="bottom"
    >
      <md-popup-title-bar
        title="Popup Title"
        ok-text="Confirm"
        cancel-text="Cancel"
        @confirm="value = false"
        @cancel="value = false"
      ></md-popup-title-bar>
      <div class="popup-content">
        Popup Content
      </div>
    </md-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false
    }
  },
  mounted () {
    this.value = true
  }
}
</script>

<style lang="stylus">
.palette-demo-popup
  .md-popup
    position static
  .md-popup-mask, .md-popup-box
    position absolute
  .popup-content
    display flex
    justify-content center
    align-items center
    height 300px
    padding-bottom 90px
    background #fff
</style>

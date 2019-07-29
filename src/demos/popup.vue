<template>
  <div class="palette-demo palette-demo-popup cleafix">
    <md-button @click="value0 = true">Show Popup</md-button>
    <md-button @click="value1 = true">Show Large-radius Popup</md-button>
    <md-popup
      v-model="value0"
      position="bottom"
    >
      <md-popup-title-bar
        title="Popup Title"
        ok-text="Confirm"
        cancel-text="Cancel"
        @confirm="value0 = false"
        @cancel="value0 = false"
      ></md-popup-title-bar>
      <div class="popup-content">
        Popup Content
      </div>
    </md-popup>
    <md-popup
      v-model="value1"
      position="bottom"
    >
      <md-popup-title-bar
        title="Popup Title"
        ok-text="yes"
        cancel-text="no"
        large-radius
        @confirm="value1 = false"
        @cancel="value1 = false"
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
      value0: false,
      value1: false
    }
  },
  mounted () {
    this.value0 = true
  }
}
</script>

<style lang="stylus">
.palette-demo-popup
  position relative
  height 100%
  .md-button
    margin-bottom 20px
  .md-popup
    position absolute !important
  .md-popup-mask, .md-popup-box
    position absolute !important
  .popup-content
    display flex
    justify-content center
    align-items center
    height 300px
    padding-bottom 90px
    background #fff
</style>

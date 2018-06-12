<template>
  <div class="palette-demo palette-demo-selector cleafix">
    <md-button @click="value = true">Show Selector</md-button>
    <md-selector
      v-model="value"
      :data="data"
      :invalid-index="2"
      title="Title"
      okText="Confirm"
      cancelText="Cancel"
      is-check
    ></md-selector>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false,
      data: [
        {
          text: 'Option 1'
        },
        {
          text: 'Option 2'
        },
        {
          text: 'Option 3'
        },
        {
          text: 'Option 4'
        }
      ]
    }
  },
  mounted () {
    this.value = true
  }
}
</script>

<style lang="stylus">
.palette-demo-selector
  .md-selector
    .md-popup
      position absolute !important
      .md-popup-box
        padding-bottom 90px
</style>

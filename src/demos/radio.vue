<template>
  <div class="palette-demo palette-demo-selector cleafix">
    <md-radio
      ref="radio"
      :options="data"
      :default-index="1"
    >
    </md-radio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false,
      data: [
        {
          text: 'Option 1',
          disabled: true
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
      position absolute
      .md-popup-box
        padding-bottom 90px
</style>

<template>
  <div class="palette-demo palette-demo-action-sheet cleafix">
    <md-button @click="value = true">Show ActionSheet</md-button>
    <md-action-sheet
      v-model="value"
      :title="title"
      :default-index="defaultIndex"
      :invalid-index="invalidIndex"
      :cancel-text="cancelText"
      :options="options"
      :max-height="600"
    ></md-action-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false,
      title: 'ActionSheet Title',
      options: [
        {
          label: 'Normal Item',
          value: 0
        },
        {
          label: 'HightLight Item',
          value: 1
        },
        {
          label: 'Disabled Item',
          value: 2
        }
      ],
      defaultIndex: 1,
      invalidIndex: 2,
      cancelText: 'Cancel'
    }
  },
  mounted () {
    this.value = true
  }
}
</script>

<style lang="stylus">
.palette-demo-action-sheet
  .md-action-sheet
    padding-bottom 95px
    .md-popup
      position absolute !important
</style>

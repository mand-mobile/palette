<template>
  <div class="palette-demo palette-demo-action-sheet cleafix">
    <md-button @click="value = true">唤起动作面板</md-button>
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
      title: '操作说明的title',
      options: [
        {
          label: '选项1',
          value: 0
        },
        {
          label: '选项2',
          value: 1
        },
        {
          label: '选项3',
          value: 2
        }
      ],
      defaultIndex: 1,
      invalidIndex: 2,
      cancelText: '取消'
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
      position absolute
</style>

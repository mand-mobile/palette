<template>
  <div class="palette-demo palette-demo-action-bar cleafix">
    <md-action-bar :actions="data">
      &yen;128.00
    </md-action-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          text: '普通'
        },
        {
          text: '禁用',
          disabled: true
        },
        {
          text: '高亮'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-action-bar
  .md-action-bar
    position absolute
    padding-bottom 95px
</style>

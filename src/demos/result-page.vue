<template>
  <div class="palette-demo palette-demo-result-page cleafix">
    <div class="palette-demo-block">
      <md-result-page type="lost"></md-result-page>
    </div>
    <div class="palette-demo-block">
      <md-result-page type="network" subtext="点击屏幕，重新加载"></md-result-page>
    </div>
    <div class="palette-demo-block">
      <md-result-page :buttons="buttons"></md-result-page>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttons: [
        {
          text: '普通按钮',
          handler() {
            Toast.succeed('普通操作')
          },
        },
        {
          text: '高亮按钮',
          type: 'primary',
          handler() {
            Toast.succeed('不普通操作')
          },
        },
      ],
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-result-page
  .palette-demo-block
    padding 20px
    background #FFF
  .md-agree
    color #666
</style>

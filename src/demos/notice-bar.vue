<template>
  <div class="palette-demo palette-demo-notice-bar cleafix">
    <md-notice-bar>为了确保您的资金安全，请设置支付密码</md-notice-bar>
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
.palette-demo-notice-bar
  .md-notice-bar
    position absolute
    width 100%
    box-sizing border-box
    top 0
    left 0
</style>

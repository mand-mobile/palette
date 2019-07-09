<template>
  <div class="palette-demo palette-demo-notice-bar cleafix">
    <md-notice-bar
      mode="closable"
      icon="security"
    >
      为了确保您的资金安全，请设置支付密码
    </md-notice-bar>
    <md-notice-bar round>为了确保您的资金安全，请设置支付密码</md-notice-bar>
    <md-notice-bar
      icon="warn"
      mode="closable"
      type="warning"
    >
      该银行3:00-12:00系统维护，请更换其他银行卡
    </md-notice-bar>
    <md-notice-bar
      icon="coupon"
      mode="link"
      type="activity"
      style="margin-top:10px;"
    >
      福利来啦，7日免息券发放中！
    </md-notice-bar>
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
    margin-bottom 20px
</style>

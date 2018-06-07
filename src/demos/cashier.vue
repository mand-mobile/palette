<template>
  <div class="palette-demo palette-demo-cashier cleafix">
    <md-button @click="value = true">Show Cashier</md-button>
    <md-cashier
      ref="cashier"
      v-model="value"
      :channels="cashierChannels"
      title="Cashier"
      payment-title="Payment Amount"
      payment-amount="100.00"
      payment-describe="Special explanation about payment amount"
    ></md-cashier>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false,
      cashierChannels: [
        {
          icon: 'cashier-icon-1',
          text: '招商银行储蓄卡(0056)支付',
          value: '001'
        },
        {
          icon: 'cashier-icon-2',
          text: '支付宝支付',
          value: '002'
        },
        {
          icon: 'cashier-icon-3',
          text: '微信支付',
          value: '003'
        },
        {
          icon: 'cashier-icon-4',
          text: 'QQ钱包支付',
          value: '004'
        },
        {
          icon: 'cashier-icon-5',
          text: '一网通支付',
          value: '005'
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
.palette-demo-cashier
  .md-dialog
    position static
  .md-popup
    position absolute
    .md-popup-box
      padding-bottom 95px
</style>

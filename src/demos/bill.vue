<template>
  <div class="palette-demo palette-demo-bill cleafix">
    <md-bill
      title="借款电子票据"
      no="12345689"
      water-mark="MAND-MOBILE"
    >
      <md-detail-item title="借款金额">
        &yen;30,000
      </md-detail-item>
      <md-detail-item title="收款账户">
        <md-icon name="bank-zs" svg style="margin-right:10px;"></md-icon>招商银行(尾号xxxx)
      </md-detail-item>
      <md-detail-item title="借款期数" content="12期" />
      <md-detail-item title="正常还款总息">
        &yen;140.50
      </md-detail-item>
      <md-detail-item title="还款">
        &yen;404.50&nbsp;(9月22日)
      </md-detail-item>
    </md-bill>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-bill
  .md-bill
    margin-bottom 30px
    box-shadow 0 6px 24px rgba(17, 26, 52, .05)
</style>

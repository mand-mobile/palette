<template>
  <div class="palette-demo palette-demo-agree cleafix">
    <div class="palette-demo-block">
      <md-agree v-model="checked0">
        本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意
      </md-agree>
    </div>
    <div class="palette-demo-block">
      <md-agree v-model="checked1" disabled>
        本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意
      </md-agree>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked0: true,
      checked1: true
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-agree
  .palette-demo-block
    margin-top 30px
  .md-agree
    color #666
</style>

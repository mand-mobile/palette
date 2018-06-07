<template>
  <div class="palette-demo palette-demo-captcha cleafix">
    <md-button @click="value = true">Show Captcha</md-button>
    <md-captcha
      ref="captcha"
      v-model="value"
      title="Enter confirmation code"
      countNormalText="send verification code"
      countActiveText="Reissued after {$1} seconds"
      :appendTo="container"
      mask
      system
    >
      verification code has been sent to 186****5407
    </md-captcha>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false,
      container: document.querySelector('.palette-edit-preview-box')
    }
  },
  mounted () {
    this.value = true
    this.$refs.captcha.setError('Error Message')
  }
}
</script>

<style lang="stylus">
.palette-demo-captcha
  .md-dialog
    position static
  .md-popup
    position absolute
    // padding-bottom 95px
</style>

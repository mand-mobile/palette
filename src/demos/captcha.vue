<template>
  <div class="palette-demo palette-demo-captcha cleafix">
    <md-button @click="value = true">Show Captcha Brief</md-button>
    <md-button @click="showError">Show Captcha Error</md-button>
    <md-captcha
      ref="captcha"
      v-model="value"
      title="Enter confirmation code"
      brief="Brief tips"
      :count="30"
      countNormalText="send verification code"
      countActiveText="Reissued after {$1} seconds"
      :appendTo="container"
      :key="tmp"
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
      tmp: Date.now(),
      value: false,
      container: document.querySelector('.palette-edit-preview-box')
    }
  },
  mounted () {
    this.value = true
  },
  methods: {
    showError () {
      this.$refs.captcha.setError('Error Message')
      this.value = true
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-captcha
  .md-button
    margin-bottom 20px
  .md-dialog
    position static
  .md-popup
    position absolute !important
    // padding-bottom 95px
</style>

<template>
  <div class="palette-demo palette-demo-steps cleafix">
    <md-steps :steps="steps" :current="currentStep" transition></md-steps>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentStep: 1,
      steps: [
        {
          name: '登录',
        },
        {
          name: '开通',
        },
        {
          name: '验证',
        },
        {
          name: '成功',
        },
      ],
    }
  },
  mounted () {

  }
}
</script>

<style lang="stylus">
.palette-demo-steps
  background #FFF
  .md-steps
    .bar
      zoom 2
</style>

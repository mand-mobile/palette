<template>
  <div class="palette-demo palette-demo-steps cleafix">
    <md-steps
      :steps="steps"
      :current="1"
    >
    </md-steps>
  </div>
</template>

<script>
export default {
  data () {
    return {
      steps: [
        {
          name: '开通理财账户'
        },
        {
          name: '验证手机号'
        },
        {
          name: '开通成功'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-steps
  .tabs-content
    display flex
    justify-content center
    align-items center
    height 400px
    background #fff
</style>

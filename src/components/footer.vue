<template>
  <el-steps
    :active="1"
    :space="300"
    finish-status="finish"
    simple
  >
    <el-step title="选择主题 [测试自定义主题]"></el-step>
    <el-step title="编辑主题 [button]"></el-step>
    <el-step title="生成主题"></el-step>
  </el-steps>
</template>

<script>
export default {
  name: 'palette-footer'
}
</script>

<style lang="stylus">
.el-steps
  margin-top 7px
  background #FFF
.el-step
  .el-step__title
    font-size 14px
</style>

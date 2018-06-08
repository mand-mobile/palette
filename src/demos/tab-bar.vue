<template>
  <div class="palette-demo palette-demo-tabs cleafix">
    <md-tabs
      :titles="titles"
    >
      <div
        class="tabs-content"
        v-for="(title, index) of titles"
        :key="index"
      >
        {{title}}的内容
      </div>
    </md-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titles: ['第一', '第二', '第三', '第四']
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-tabs
  .tabs-content
    display flex
    justify-content center
    align-items center
    height 400px
    background #fff
</style>

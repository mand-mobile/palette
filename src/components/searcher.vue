<template>
  <div class="palette-searcher">
    <i class="el-icon-search"></i>
    <el-input
      class="palette-searcher-input"
      v-model.trim="value"
      :placeholder="placeholder"
      auto-complete="off"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: 'palette-searcher',
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    value (val) {
      this.$emit('search', val)
    }
  }
}
</script>

<style lang="stylus">
.palette-searcher
  position relative
  .el-icon-search
    position absolute
    z-index 2
    left 20px
    top 12px
    color #999
    font-size 18px
  .palette-searcher-input input
    width 500px
    height 40px
    padding 0 50px
    outline none
    border-radius 40px
    border none
    border solid 1px #f0f0f0
    box-sizing border-box
</style>

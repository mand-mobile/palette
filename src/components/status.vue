<template>
  <div class="palette-status">
    <img :src="imgUrl" alt="">
    <p v-html="describe"></p>
    <el-button
      v-if="button.text"
      v-text="button.text"
      @click="button.handler"
      round
    ></el-button>
  </div>
</template>

<script>
export default {
  name: 'palette-status',
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    describe: {
      type: String,
      default: ''
    },
    button: {
      type: Object,
      default () {
        return {
          text: '',
          handler: ''
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.palette-status
  width 300px
  margin 0 auto
  img
    width 100px
    margin-left 100px
    filter grayscale(100%)
    opacity .5
  p
    margin-top 20px
    font-size 16px
    color #ccc
    text-align center
  .el-button
    margin-top 20px
    margin-left 98px
</style>

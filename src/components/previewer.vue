<template>
  <div class="palette-previewer">
    <img
      class="palette-previewer-frame"
      src="//manhattan.didistatic.com/static/manhattan/mand/palette/iphoneX.png"
      alt=""
    >
    <div class="palette-previewer-box">
      <component
        v-bind:is="demos[name]"
      ></component>
    </div>
    <div class="palette-previewer-decorate"></div>
    <div class="palette-previewer-tip" v-html="$t('edit.previewTip')"></div>
  </div>
</template>

<script>
import { Loading } from 'element-ui'
export default {
  name: 'palette-previewer',
  props: {
    name: {
      type: String,
      default: '',
      loadingInstance: ''
    }
  },
  data () {
    return {
      demos: {}
    }
  },
  created () {
    require.ensure([], () => {
      this.demos = require(`../demos`).default
      if (this.loadingInstance) {
        this.loadingInstance.close()
      }
    }, 'demos')
  },
  mounted () {
    this.loadingInstance = Loading.service({
      target: this.$el.querySelector('.palette-previewer-box'),
      text: this.$t('edit.loadingTip')
    })
  }
}
</script>

<style lang="stylus">
.palette-previewer
  position relative
  padding 30px 0 50px
  .palette-previewer-frame
    width 100%
  .palette-previewer-box
    position absolute
    z-index 2
    top 116px
    left 14px
    width 375px
    height 740px
    margin 0 14px
    // padding 80px 0 0
    background #fbfbfb
    // opacity .5
    box-sizing border-box
    border-radius 0 0 56px 56px
    overflow hidden
    .palette-demo
      padding 20px
      box-sizing border-box
      zoom calc(375/750)
  .palette-previewer-decorate
    position absolute
    z-index 3
    left 50%
    bottom 105px
    width 120px
    height 4px
    margin-left -60px
    border-radius 4px
    background #999
  .palette-previewer-tip
    margin-top 10px
    font-size 12px
    text-align center
    color #999
    span
      padding 0 5px
      font-style italic
</style>

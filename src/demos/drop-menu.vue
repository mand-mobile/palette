<template>
  <div class="palette-demo palette-demo-drop-menu cleafix">
    <md-drop-menu
      ref="dropMenu"
      :data="data"
      :default-value="['1', '8']"
    ></md-drop-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isContentShow: false,
      data: [
        {
          text: '排量',
          options: [
            {
              value: '0',
              text: '1.6L',
            },
            {
              value: '1',
              text: '1.8L',
            },
            {
              value: '2',
              text: '2.0L',
              disabled: true,
            },
            {
              value: '3',
              text: '1.2T',
            },
            {
              value: '4',
              text: '1.4T',
            },
            {
              value: '5',
              text: '1.6T',
            },
          ],
        },
        {
          text: '变速箱',
          disabled: true,
          options: [
            {
              value: '7',
              text: '手动挡',
            },
            {
              value: '8',
              text: '自动挡',
            },
            {
              value: '9',
              text: '手自一体',
            },
          ],
        },
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.dropMenu.$el.querySelectorAll('.bar-item')[0].click()
    })
  }
}
</script>

<style lang="stylus">
.palette-demo-drop-menu
  .md-drop-menu
    position absolute !important
    height 100%
    .md-drop-menu-bar
      height var(--drop-menu-height)
  .md-popup
    position absolute !important
</style>

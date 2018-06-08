<template>
  <div class="palette-demo palette-demo-drop-menu cleafix">
    <md-drop-menu
      :data="data"
      :default-value="['1.8L', '自动挡']"
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
              text: '1.6L'
            },
            {
              text: '1.8L'
            },
            {
              text: '2.0L',
              disabled: true
            },
            {
              text: '1.2T'
            },
            {
              text: '1.4T'
            },
            {
              text: '1.6T'
            }
          ]
        },
        {
          text: '变速箱',
          disabled: true
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-drop-menu
  .md-drop-menu
    position absolute
    height 100%
    .md-drop-menu-bar
      height var(--drop-menu-height)
  .md-popup
    position absolute
</style>

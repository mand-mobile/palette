<template>
  <div class="palette-demo palette-demo-action-bar cleafix">
    <md-action-bar :actions="data">
      &yen;128.00
    </md-action-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          text: 'Normal'
        },
        {
          text: 'Disabled',
          disabled: true
        },
        {
          text: 'Highlight'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-action-bar
  .md-action-bar
    position absolute
    padding-bottom 95px
</style>

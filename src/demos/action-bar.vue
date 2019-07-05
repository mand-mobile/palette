<template>
  <div class="palette-demo palette-demo-action-bar cleafix">
    <md-action-bar :actions="data0" style="bottom:280px;"></md-action-bar>
    <md-action-bar :actions="data1" style="bottom:140px;"></md-action-bar>
    <md-action-bar :actions="data0">
      <span class="price">
        &yen;128.00<small>sp</small>
      </span>
    </md-action-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data0: [
        {
          text: 'Submit'
        }
      ],
      data1: [
        {
          text: 'Cancel',
        },
        {
          text: 'Confirm',
          disabled: true,
        },
      ],
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-action-bar
  .md-action-bar
    position absolute !important
    padding-bottom 95px
    .price
      font-weight 500
      font-size 48px
      color #FF823A
      small
        margin-left 10px
        font-size 32px
        color #858B9C
</style>

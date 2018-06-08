<template>
  <div class="palette-demo palette-demo-picker cleafix">
    <div class="palette-demo-block">
      <md-picker
        ref="picker"
        :data="data"
        :invalid-index="[2]"
        is-view
      ></md-picker>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [[
        {
          text: 'Item 1'
        },
        {
          text: 'Item 2'
        },
        {
          text: 'Item 3'
        },
        {
          text: 'Item 4'
        }
      ]]
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-picker
  .palette-demo-block
    margin-top 30px
</style>

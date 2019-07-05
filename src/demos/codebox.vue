<template>
  <div class="palette-demo palette-demo-codebox cleafix">
    <div class="palette-demo-block cleafix">
      <md-codebox v-model="code0" system autofocus/>
    </div>
    <div class="palette-demo-block cleafix">
      <md-codebox v-model="code1" system mask/>
    </div>
    <div class="palette-demo-block cleafix">
      <md-codebox v-model="code2" :maxlength="-1" system/>
    </div>
    <div class="palette-demo-block cleafix">
      <md-codebox v-model="code0" system disabled />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code0: '1234',
      code1: '1234',
      code2: '1234'
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-codebox
  .palette-demo-block
    margin-bottom 20px
    padding 20px
    background #fff
</style>

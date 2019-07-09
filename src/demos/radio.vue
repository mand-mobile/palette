<template>
  <div class="palette-demo palette-demo-selector cleafix">
    <md-field>
      <md-field-item title="婚姻状况" solid>
        <md-radio name="2" v-model="marriage" label="已婚" inline />
        <md-radio name="1" v-model="marriage" label="未婚" inline />
        <md-radio name="3" v-model="marriage" label="保密" inline />
      </md-field-item>
    </md-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      marriage: '2',
    }
  },
  mounted () {
    this.value = true
  }
}
</script>

<style lang="stylus">
.palette-demo-selector
  .md-selector
    .md-popup
      position absolute
      .md-popup-box
        padding-bottom 90px
</style>

<template>
  <div class="palette-demo palette-demo-number-keyboard cleafix">
    <md-button @click="value = true">Show Keyboard</md-button>
    <md-button @click="type = inverseType">Switch To "{{ inverseType }}" Type</md-button>
    <md-number-keyboard
      v-model="value"
      :type="type"
    ></md-number-keyboard>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: false,
      type: 'professional'
    }
  },
  computed: {
    inverseType () {
      return this.type === 'professional' ? 'simple' : 'professional'
    }
  },
  mounted () {
    this.value = true
  }
}
</script>

<style lang="stylus">
.palette-demo-number-keyboard
  .md-button
    margin-top 30px
  .md-number-keyboard
    .md-popup-box
      position absolute
      padding-bottom 95px
</style>

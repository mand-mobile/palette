<template>
  <div class="palette-demo palette-demo-chart cleafix">
    <div class="palette-demo-block cleafix">
      <md-chart
        :size="['680px', '380px']"
        :max="60"
        :min="0"
        :step="10"
        :lines="5"
        :format="format"
        :labels="['Mon', 'Tues', 'Wed', 'Tuer', 'Fri', 'Sat', 'Sun']"
        :datasets="[
          {
            width: 4,
            values: [8, 15, 20, 23, 20, 30, 32, 38, 36, 40, 50, 55, 52]
          },
          {
            color: '#048efa',
            width: 4,
            values: [10, 20, 25, 30, 28, 35, 38, 42, 40, 40, 45, 42, 45]
          }
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    format(val) {
      return val + '%'
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-chart
  .palette-demo-block
    margin-top 50px
    svg
      display block
      margin 0 auto
      width 600px
      overflow visible
</style>

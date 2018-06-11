<template>
  <div class="palette-demo palette-demo-date-picker cleafix">
    <div class="palette-demo-block">
      <md-date-picker
        today-text="Today"
        :default-date="currentDate"
        :unit-text="['', '', '']"
        is-view
      ></md-date-picker>
    </div>
    <div class="palette-demo-block">
      <md-date-picker
        type="datetime"
        :default-date="currentDate"
        :unit-text="['', '', '', 'H', 'M']"
        :half-day-text="['AM', 'PM']"
        is-twelve-hours
        is-view
      ></md-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-date-picker
  .palette-demo-block
    margin-top 30px
</style>

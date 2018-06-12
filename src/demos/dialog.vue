<template>
  <div class="palette-demo palette-demo-dialog cleafix">
    <div class="palette-demo-block">
      <md-button @click="dialog0 = true">Show Basic Dialog</md-button>
      <md-dialog
        v-model="dialog0"
        title="Basic Dialog"
        :closable="true"
        :appendTo="container"
        :btns="[
          {
            text: 'Cancel',
          },
          {
            text: 'Confirm',
          }
        ]"
      >
        The thorns of life are here, and those who are reluctant to go brisk are partial things that you don't care about.
      </md-dialog>
    </div>
    <div class="palette-demo-block">
      <md-button @click="dialog1 = true">Show Dialog With Icon</md-button>
      <md-dialog
        v-model="dialog1"
        title="Dialog With Icon"
        icon="circle-right"
        :closable="true"
        :appendTo="container"
        :btns="[
          {
            text: 'Cancel',
          },
          {
            text: 'Confirm',
          }
        ]"
      >
        People in the city want to escape. People outside the city want to rush in. This is true for marriage, career, and life.
      </md-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog0: false,
      dialog1: false,
      container: document.querySelector('.palette-edit-preview-box')
    }
  },
  mounted () {
    this.dialog1 = true
  }
}
</script>

<style lang="stylus">
.palette-demo-dialog
  .palette-demo-block
    margin-top 30px
  .md-dialog
    position static
  .md-popup
    position absolute !important
</style>

<template>
  <div class="palette-demo palette-demo-toast cleafix">
    <div class="palette-demo-block">
      <div class="md-toast">
        <div class="md-toast-content">
          <span>Toast Text</span>
        </div>
      </div>
    </div>
    <div class="palette-demo-block">
      <div class="md-toast has-icon">
        <div class="md-toast-content">
          <md-icon name="warn" size="lg" />
          <div class="md-toast-text">Toast With Icon</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.palette-demo-toast
  .palette-demo-block
    display flex
    justify-content center
   .md-toast
    position relative
    margin-top 50px
</style>

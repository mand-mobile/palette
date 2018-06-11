<template>
  <div class="palette-demo palette-demo-field cleafix">
    <md-field title="Field Title">
      <md-field-item
        name="item0"
        title="normal item"
        arrow="arrow-right"
        value="item content"
        align="right"
        solid
      >
      </md-field-item>
      <md-field-item
        name="item1"
        title="disabled item"
        arrow="arrow-right"
        value="item content"
        align="right"
        disabled
      >
      </md-field-item>
      <md-field-item
        name="item2"
        title="item with description"
        brief="this is item description"
        arrow="arrow-right"
      >
      </md-field-item>
    </md-field>
  </div>
</template>

<style lang="stylus">
.palette-demo-field
  margin-top 0
</style>

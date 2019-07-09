<template>
  <div class="palette-demo palette-demo-field cleafix">
    <md-field title="区域标题" brief="区域描述性文本，可根据具体场景配置">
      <div class="action-container" slot="action">
        操作 <md-icon name="rectangle"></md-icon>
      </div>
      <p slot="footer">区域页脚区域内容插槽</p>
      <md-field-item solid title="标题区域" placeholder="提示文本" />
      <md-field-item solid title="标题区域" content="内容文本" addon="附加信息" />
      <md-field-item solid title="附加内容" content="正文内容">
        <p slot="children">这是子内容区域</p>
      </md-field-item>
      <md-field-item solid title="动作条目" arrow @click="onClick" />
      <md-field-item solid title="禁用条目" content="内容禁用状态" arrow disabled />
    </md-field>
  </div>
</template>

<style lang="stylus">
.palette-demo-field
  .md-field-action
    height 36px
    align-items flex-end
    .action-container
      display flex
      align-items center
      .md-icon
        margin-left 10px
        color #C5CAD5
        font-size 16px
        width auto
        height auto
        line-height normal
</style>

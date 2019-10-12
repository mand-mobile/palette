<template>
  <div class="palette-demo palette-demo-textarea-item cleafix">
    <md-field>
      <md-textarea-item
        title="普通"
        autosize
        class="example"
        value="Hello world"
      />
      <md-textarea-item
        ref="demo0"
        title="删除图标"
        :autosize="true"
        clearable
        :rows="1"
        value="输入出现删除图标"
        :max-height="150"
      />
      <md-textarea-item
        title="错误"
        error="错误提示"
      />
      <md-textarea-item
        title="禁用"
        value="Hello world"
        disabled
      />
    </md-field>
  </div>
</template>
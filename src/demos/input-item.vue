<template>
  <div class="palette-demo palette-demo-input-item cleafix">
    <md-field>
      <md-input-item
        title="Normal"
        placeholder="Normal Input"
        value="Content"
        clearable
      ></md-input-item>
      <md-input-item
        title="Disabled"
        value="Disabled Input"
        disabled
      ></md-input-item>
      <md-input-item
        title="Highlight"
        placeholder="Highlight Input"
        is-highlight
      ></md-input-item>
      <md-input-item
        title="Large"
        placeholder="Large Input"
        size="large"
      ></md-input-item>
      <md-input-item
        title="Floating Title"
        value="Floating Title Input"
        is-title-latent
        clearable
      ></md-input-item>
      <md-input-item
        title="Brief"
        brief="Brief message"
        clearable
      ></md-input-item>
      <md-input-item
        title="Error"
        placeholder="Input With Error Message"
        error="this is error message"
        value="1234"
        clearable
      ></md-input-item>
    </md-field>
  </div>
</template>

<style lang="stylus">
.palette-demo-input-item
  .md-field
    padding-bottom 30px
</style>

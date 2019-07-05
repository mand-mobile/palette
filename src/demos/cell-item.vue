<template>
  <div class="palette-demo palette-demo-cell-item cleafix">
    <md-field>
      <md-cell-item title="交通银行(尾号3089)" />
      <md-cell-item title="交通银行(尾号3089)" brief="展示摘要描述" addon="附加文案" arrow />
      <md-cell-item title="交通银行" brief="展示摘要描述" addon="附加文案" arrow>
        <span class="holder" slot="left"></span>
      </md-cell-item>
      <md-cell-item title="招商银行" brief="展示摘要描述" addon="禁用的项目" disabled arrow>
        <span class="holder" slot="left"></span>
      </md-cell-item>
      <md-cell-item title="Mand Mobile" brief="A mobile UI toolkit" arrow>
        <p slot="children" style="font-size:0.24rem;color:#858B9C;">
          面向金融场景的Vue移动端UI组件库，丰富、灵活、实用，快速搭建优质的金融类产品，让复杂的金融场景变简单。基于「合理、好用」设计价值观，从交互操作、视觉抽象、图形可视等角度共同解决问题。
        </p>
      </md-cell-item>
    </md-field>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.palette-demo-cell-item
  .holder
    display block
    width 88px
    height 88px
    border-radius 44px
    background-color #E6E6E6
</style>

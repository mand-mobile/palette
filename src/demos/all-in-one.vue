<template>
  <div class="palette-demo palette-demo-all cleafix">
    <md-field title="投保人" class="block">
      <md-input-item
        title="投保人姓名"
        placeholder="请填写投保人姓名"
        is-highlight
      ></md-input-item>
      <md-input-item
        title="身份证号"
        placeholder="请填写投保人身份证号"
      ></md-input-item>
    </md-field>
    <md-field title="被保人" class="block">
      <md-input-item
        title="被保人姓名"
        placeholder="请填写被保人姓名"
        is-highlight
      ></md-input-item>
      <md-field-item
        title="与投保人关系"
        arrow="arrow-right"
        :value="relation"
        @click="isPickerShow = true"
        solid
      ></md-field-item>
      <md-picker
        v-model="isPickerShow"
        :data="pickerData"
        title="选择与投保人关系"
      ></md-picker>
      <md-input-item
        title="身份证号"
        placeholder="请填写被保人身份证号"
      ></md-input-item>
      <md-input-item
        title="手机号"
        type="phone"
        placeholder="请填写被保人手机号"
      ></md-input-item>
    </md-field>
    <md-agree v-model="isAgreeChecked">
      本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意
    </md-agree>
    <md-action-bar :actions="actionBarData">
      &yen;128.00
    </md-action-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      relation: '本人',
      isAgreeChecked: true,
      isPickerShow: false,
      actionBarData: [{
        text: '我要投保'
      }],
      pickerData: [[
        { text: '本人' },
        { text: '父母' },
        { text: '配偶' },
        { text: '子女' }
      ]]
    }
  }

}
</script>

<style lang="stylus">
.palette-demo-all
  .md-action-bar
    position absolute
    padding-bottom 95px
  .md-field
    margin-bottom 30px
  .md-agree
    padding 32px
    font-size 24px
    color #666
  .md-picker
    .md-popup
      position absolute
      .md-popup-box
        padding-bottom 90px
</style>

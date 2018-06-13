<template>
  <div class="palette-demo palette-demo-all cleafix">
    <div class="container">
      <div class="banner">
        <img src="//img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a" alt="">
      </div>
      <md-tab-bar
        :titles="titles"
      ></md-tab-bar>
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
    </div>
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
      titles: ['5万', '10万', '20万'],
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
  padding 0 !important
  .container
    height 1480px
    overflow scroll
  .banner
    img
      width 100%
  .md-action-bar
    position absolute !important
    padding-bottom 95px
  // .md-field
  //   margin-bottom 30px
  .md-agree
    padding 32px
    margin-bottom 200px
    font-size 24px
    color #666
  .md-picker
    .md-popup
      position absolute !important
      .md-popup-box
        padding-bottom 90px
</style>

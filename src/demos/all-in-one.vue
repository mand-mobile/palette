<template>
  <div class="palette-demo palette-demo-all cleafix">
    <div class="section checkbox">
      <md-check-box name="day" v-model="type" label="Daily" disabled/>
      <md-check-box name="month" v-model="type" label="Monthly"/>
      <md-check-box name="season" v-model="type" label="Quarterly"/>
    </div>
    <md-field class="section" title="Policy holder">
      <md-input-item title="Name" placeholder="Please fill in the name of the policy holder"></md-input-item>
      <md-input-item title="ID" placeholder="Please fill in the ID number of the policy holder"></md-input-item>
    </md-field>
    <md-field class="section" title="Insured">
      <md-input-item title="Name" placeholder="Please fill in the name of the insured"></md-input-item>
      <md-field-item title="Relation" :content="relation" arrow @click="isPickerShow = true" solid></md-field-item>
      <md-picker v-model="isPickerShow" :data="pickerData" @confirm="onPickerConfirm"></md-picker>
      <md-input-item title="ID" placeholder="Please fill in the ID number of the insured"></md-input-item>
      <md-input-item
        title="Phone"
        type="phone"
        placeholder="Please fill in the phone number of the insured"
      ></md-input-item>
    </md-field>
    <md-agree class="agree" v-model="isAgree">
      <p
        class="agree-text"
      >I promise that the insured will fully understand the insurance product and guarantee the authenticity of the insurance information, understand and agree</p>
    </md-agree>
    <md-action-bar class="action-bar" :actions="actionBarData">
      <p class="price">&yen;128.00</p>
      <md-tag
        size="small"
        shape="circle"
        sharp="bottom-left"
        type="fill"
        fill-color="linear-gradient(90deg, #FC7353 0%, #FC9153 100%)"
        font-color="#fff"
      >discount</md-tag>
    </md-action-bar>
  </div>
</div>
</template>

<script>
import { Dialog } from "mand-mobile"
export default {
  name: "app",

  data() {
    return {
      type: '',
      relation: 'Self',
      isAgree: false,
      isPickerShow: false,
      actionBarData: [
        {
          text: "Insured",
          onClick() {
            Dialog.succeed({
              title: 'Success',
              content: 'Congratulations',
              confirmText: 'Yes',
              cancelText: 'Cancel'
            });
          }
        }
      ],
      pickerData: [
        [
          { text: 'Self' },
          { text: 'Parents' },
          { text: 'Spouse' },
          { text: 'Children' }
        ]
      ]
    };
  },

  methods: {
    onPickerConfirm(values) {
      this.relation = values[0].text
    }
  }
};
</script>

<style lang="stylus">
.palette-demo-all
  padding 0 !important
  .container
    height 1480px
    overflow scroll
  .section
    margin-bottom 20px
    background #FFF
  .md-action-bar
    position absolute !important
    padding-bottom 95px
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
  .action-bar 
    .price
      font-weight 500
      font-size 32px
      color #FF823A
      small
        margin-left 5px
        font-size 16px
        color #858B9C
    .md-tag
      margin-left 5px
</style>

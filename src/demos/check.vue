<template>
  <div class="palette-demo palette-demo-check cleafix">
    <div class="palette-demo-block">
      <md-check-group v-model="favorites0">
        <md-check name="watermelon" label="西瓜" />
        <md-check name="apple" label="苹果" />
        <md-check name="banana" label="香蕉" />
        <md-check name="orange" label="橙子" />
        <md-check name="tomato" label="西红柿" disabled />
      </md-check-group>
    </div>
    <div class="palette-demo-block">
      <md-check-box name="day" v-model="pay" label="日缴" disabled />
      <md-check-box name="month" v-model="pay" label="月付" />
      <md-check-box name="season" v-model="pay" label="季度费" />
    </div>
    <div class="palette-demo-block">
      <md-check-list
        v-model="favorites1"
        iconPosition="left"
        :options="fruits"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      favorites0: ['apple'],
      favorites1: ['apple'],
      pay: '',
      fruits: [
        {value: 'watermelon', label: '西瓜', brief: '选项摘要描述'},
        {value: 'apple', label: '苹果', brief: '选项摘要描述'},
        {value: 'banana', label: '香蕉', brief: '选项摘要描述'},
        {value: 'orange', label: '橙子', brief: '选项摘要描述'},
        {value: 'tomato', label: '西红柿', brief: '选项摘要描述', disabled: true},
      ],
    }
  }
}
</script>

<style lang="stylus">
.palette-demo-check
  .palette-demo-block
    margin-bottom 20px
    padding 20px
    background #FFF
</style>

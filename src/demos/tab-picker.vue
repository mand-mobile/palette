<template>
  <div class="palette-demo palette-demo-tab-picker cleafix">
    <md-field title="地址">
      <md-field-item
        title="联系地址"
        arrow="arrow-right"
        @click="show = !show"
        placeholder="请选择联系地址"
        :content="addressStr"
        solid
      />
    </md-field>
    <md-tab-picker
      title="请选择"
      describe="请选择您所在的省份、城市、区县"
      :data="data"
      v-model="show"
      @change="handleChange"
    />
  </div>
</template>

<script>
import data from 'mand-mobile/components/tab-picker/demo/data'

export default {
  data () {
    return {
      show: true,
      address: [],
      data,
    }
  },
  computed: {
    addressStr() {
      return this.address.map(item => item.label).join(' ')
    },
  },
  methods: {
    handleChange({options}) {
      this.address = options
    },
  },
}
</script>

<style lang="stylus">
.palette-demo-tab-picker
  .md-tab-picker .md-popup
    position absolute
</style>

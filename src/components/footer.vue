<template>
  <el-steps
    :active="currentStepIndex"
    finish-status="success"
    simple
  >
    <el-step
      :title="`${$t('footer.step0')} ${themeName ? `[${themeName}]` : ''}`"
      @click.native="goToRecord"
    ></el-step>
    <el-step
      :title="`${$t('footer.step1')} ${itemName ? `[${itemName}]` : ''}`"
      @click.native="goToList"
    ></el-step>
    <el-step :title="$t('footer.step2')"></el-step>
  </el-steps>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'palette-footer',
  data () {
    return {
      routeName: this.$route.name
      // themeIndex: this.$route.query.themeIndex,
      // moduleName: this.$route.query.moduleName,
      // itemName: this.$route.query.itemName
    }
  },
  computed: {
    ...mapState(['themes']),
    currentStepIndex () {
      switch (this.$route.name) {
        case 'Record':
          return 0
        case 'List':
        case 'Edit':
          return 1
        case 'Generate':
          return 2
        default:
          return -1
      }
    },
    themeName () {
      const themeIndex = this.$route.query.themeIndex
      const theme = this.themes[themeIndex]
      return theme ? theme.title : ''
    },
    itemName () {
      return this.$route.query.itemName || ''
    }
  },
  methods: {
    goToRecord () {
      this.$router.replace('/record')
    },
    goToList () {
      if (this.currentStepIndex < 1) {
        return
      }
      this.$router.replace({
        path: '/list',
        query: {
          themeIndex: this.$route.query.themeIndex
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.el-steps
  margin-top 7px
  background #FFF
.el-step
  cursor pointer
  transition all .3s
  &:hover
    opacity .5
  .el-step__title
    font-size 14px !important
    &.is-success
      color #048efa
  .el-step__head.is-success
    color #048efa
    border-color #048efa
</style>

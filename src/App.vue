<template>
  <el-container class="palette-container" :class="{'is-home': isHome}">
    <el-header>
      <div class="em-inner">
        <palette-header :hide-logo="isHome"></palette-header>
      </div>
    </el-header>
    <el-main>
      <el-alert
        v-if="localStoreUnsupport"
        :title="$t('localstorage.tip')"
        type="warning"
        center
        show-icon
      ></el-alert>
      <div class="em-inner">
        <router-view></router-view>
      </div>
    </el-main>
    <el-footer v-if="!isHome">
      <div class="em-inner">
        <palette-footer></palette-footer>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
import PaletteHeader from './components/header'
import PaletteFooter from './components/footer'

export default {
  name: 'App',
  components: {
    PaletteHeader,
    PaletteFooter
  },
  computed: {
    ...mapState(['localStoreUnsupport']),
    isHome () {
      return this.$route.name === 'Home'
    }
  }
}
</script>
<style lang="stylus">
.palette-container
  font-size 14px
  font-family Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif
  font-weight 400
  -webkit-font-smoothing antialiased
  .em-inner
    width 1200px
    margin 0 auto
  .el-header
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    padding 0 60px
    box-shadow 0 2px 4px rgba(0, 0, 0, 0.05)
    background #FFF
  .el-main
    padding 60px 0
  .el-footer
    position fixed
    z-index 100
    bottom 0
    left 0
    right 0
    background #FFF
    box-shadow 0 -2px 4px rgba(0, 0, 0, 0.05)
  &.is-home
    .el-header
      box-shadow none
    .el-main
      position fixed
      top 0
      left 0
      bottom 0
      right 0
      background #fff
</style>

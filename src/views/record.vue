<template>
  <div class="palette-record">
    <div class="palette-record-top clearfix">
      <palette-searcher></palette-searcher>
      <el-button type="primary" round icon="el-icon-circle-plus" @click="createTheme">
        创建新主题
      </el-button>
    </div>
    <div class="palette-record-list clearfix">
      <template
        v-if="themes && themes.length"
      >
        <palette-recorder
          v-for="(theme, index) in themes"
          :key="`record-${index}`"
          :theme="theme"
          @delete="onDelete"
          @select="onSelect"
        ></palette-recorder>
      </template>
      <template v-else>
        <palette-status
          imgUrl="//manhattan.didistatic.com/static/manhattan/mfd/result-page/empty"
          describe="空空如也, 白天和晚上都是冬夜"
        ></palette-status>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import PaletteSearcher from '../components/searcher'
import PaletteRecorder from '../components/recorder'
import PaletteStatus from '../components/status'

export default {
  components: {
    PaletteSearcher,
    PaletteRecorder,
    PaletteStatus
  },
  computed: {
    ...mapState(['themes'])
  },
  methods: {
    ...mapMutations(['createTheme', 'deleteTheme']),
    onDelete (themeIndex) {
      this.$confirm('此操作将永久删除该主题, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteTheme(themeIndex)
      })
    },
    onSelect (themeIndex) {
      this.$router.push({
        path: '/list',
        query: { themeIndex }
      })
    }
  }
}
</script>

<style lang="stylus">
.palette-record
  padding-top 30px
  .palette-record-top
    .palette-searcher
      float left
    .el-button
      float right
  .palette-record-list
    margin-top 30px
    .palette-recorder
      float left
      width 48%
      margin-bottom 20px
      margin-right 4%
      &:nth-child(2n)
        margin-right 0
    .palette-status
      margin-top 200px
</style>

<template>
  <div class="palette-list">
    <palette-searcher></palette-searcher>
    <template v-if="theme">
      <div
        v-for="(module, moduleName) in theme.data"
        :key="`module-${moduleName}`"
        class="palette-list-category clearfix"
      >
        <h3 class="palette-list-category-title">
          <span v-if="moduleName === 'basic'">基础</span>
          <span v-else>组件</span>
          {{moduleName}}
        </h3>
        <ul>
          <li
            v-for="(item, itemName) in module"
            :key="`item-${itemName}`"
            class="palette-list-category-item"
          >
            <palette-card
              :name="itemName"
              @click="onClick(moduleName, itemName)"
            ></palette-card>
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      <palette-status
        imgUrl="//manhattan.didistatic.com/static/manhattan/mfd/result-page/network"
        describe="没有找到主题，请返回重新选择"
        :button="{
          text: '选择主题',
          handler () {
            $router.replace('/record')
          }
        }"
      ></palette-status>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PaletteSearcher from '../components/searcher'
import PaletteCard from '../components/card'
import PaletteEditor from '../components/editor'
import PaletteStatus from '../components/status'

export default {
  components: {
    PaletteSearcher,
    PaletteCard,
    PaletteEditor,
    PaletteStatus
  },
  data () {
    return {
      themeIndex: -1
    }
  },
  computed: {
    ...mapState(['themes']),
    theme () {
      const themeIndex = this.themeIndex
      if (themeIndex < 0) {
        return null
      } else {
        return this.themes[themeIndex]
      }
    }
  },
  created () {
    this.themeIndex = this.$route.query.themeIndex
  },
  methods: {
    onClick (moduleName, itemName) {
      this.$router.push({
        path: '/edit',
        query: {
          themeIndex: this.themeIndex,
          moduleName,
          itemName
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.palette-list
  padding-top 30px
  .palette-list-category
    margin-top 30px
    ul
      float left
      width 100%
    .palette-list-category-title
      position relative
      float left
      width 100%
      margin-bottom 20px
      padding-left 35px
      color #333
      font-size 28px
      font-weight 400
      span
        position absolute
        top 0
        left 0
        font-size 12px
        color #999
    .palette-list-category-item
      position relative
      float left
      width 18%
      margin-bottom 15px
      margin-right 2.5%
      padding-bottom 18%
      box-sizing border-box
      &:nth-child(5n)
        margin-right 0
      // overflow hidden
      .palette-card
        position absolute
        left 0
        top 0
  .palette-list-dialog
    // top 50%
    // height 800px
    // transform translateY(-50%)
    .el-dialog__header
      display none
    .el-dialog__body
      padding 0
  .palette-status
    margin-top 200px
</style>

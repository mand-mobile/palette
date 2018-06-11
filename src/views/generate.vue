<template>
  <div class="palette-generate">
    <template v-if="this.theme">
      <div class="palette-generate-download">
        <i class="el-icon-printer"></i>
        <div class="download-block button">
          <el-button
            type="primary"
            :loading="cssLoading"
            round
            @click="generateCss"
          >{{ $t('generate.css') }}</el-button>
          <el-button
            type="danger"
            :loading="stylLoading"
            round
            @click="generateStyl"
          >{{ $t('generate.styl') }}</el-button>
        </div>
        <p class="download-block text">{{ $t('generate.error') }}</p>
      </div>
      <div class="palette-generate-content" v-if="copyContent">
        <el-button
          type="primary"
          :icon="copyIcon"
          v-clipboard:copy="copyContent"
          v-clipboard:success="onCopySuccess"
          circle
        ></el-button>
        <pre>
          {{ copyContent }}
        </pre>
      </div>
    </template>
    <template v-else>
      <palette-status
        imgUrl="//manhattan.didistatic.com/static/manhattan/mfd/result-page/network"
        :describe="$t('list.errorTip')"
        :button="{
          text: $t('list.errorBtn'),
          handler () {
            $router.replace('/record')
          }
        }"
      ></palette-status>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FileSaver from 'file-saver'
import PaletteStatus from '../components/status'
import { traverseObject, findKeyValue } from '../utils'
import { styleVariableInfo } from '../data'

export default {
  name: 'palette-generate',
  components: {
    PaletteStatus
  },
  data () {
    return {
      themeIndex: -1,
      libCss: '',
      libVw: '',
      cssLoading: false,
      stylLoading: false,
      copyContent: '',
      copyIcon: 'el-icon-document'
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
    this.initCss()
  },
  methods: {
    ...mapActions({
      getMandMobileCss: 'GET_MAND_MOBILE_CSS'
    }),

    initCss () {
      if (!this.theme) {
        return
      }
      this.getMandMobileCss({
        themeIndex: this.themeIndex,
        type: 'lib'
      }).then(res => {
        if (res.status === 200 && res.data) {
          this.libCss = res.data
        } else {
          this.$message.error(this.$t('edit.cssError').replace('xxxxx', `mand-mobile v${this.theme.version} css(px) file`))
        }
      })
    },
    generateStyl () {
      const contents = []

      let tmpItem = ''
      let tmpItemVariables = []
      this.stylLoading = true
      traverseObject(this.theme.data, (key, value, path) => {
        const item = path[1]
        if (tmpItem !== path[1]) {
          if (tmpItemVariables.length) {
            contents.push(tmpItemVariables.join('\n'))
          }
          tmpItem = item
          tmpItemVariables = [`\n// ${item}`]
        }
        tmpItemVariables.push(`${key} = ${value}`)
      })
      contents.push(tmpItemVariables.join('\n'))

      this.saveFile(contents.join('\n\n'), 'styl')
      this.copyContent = contents.join('\n\n')
      this.stylLoading = false
    },
    generateCss () {
      let content = this.libCss

      const dataSource = this.theme.data
      this.cssLoading = true
      traverseObject(dataSource, (key, value, path) => {
        if (styleVariableInfo.hasOwnProperty(value)) {
          value = findKeyValue(dataSource, value)
        }
        content = content.replace(new RegExp(`var\\(--${key.trim()}\\)`, 'g'), value)
      })

      this.saveFile(content, 'css')
      this.copyContent = content
      this.cssLoading = false
    },
    saveFile (content, ext, downgrade) {
      try {
        const blob = new Blob([content], {
          type: 'text/plain;charset=utf-8'
        })
        FileSaver.saveAs(blob, `${this.theme.title}.${ext}`)
      } catch (error) {
        downgrade(content)
      }
    },

    onCopySuccess () {
      this.copyIcon = 'el-icon-check'
      setTimeout(() => {
        this.copyIcon = 'el-icon-document'
      }, 1000)
    }
  }
}
</script>

<style lang="stylus">
.palette-generate
  padding 30px 0
  .palette-generate-download
    position relative
    display flex
    height 200px
    align-items center
    justify-content center
    background #f4f4f5
    border-radius 10px
    .el-icon-printer
      position absolute
      top 30px
      font-size 20px
      color #999
    .download-block.text
      position absolute
      bottom 30px
      font-size 12px
      color #999
  .palette-generate-content
    position relative
    margin-top 30px
    padding 20px
    background #f4f4f5
    border-radius 10px
    pre
      color #666
      overflow-x scroll
    .el-button
      position absolute
      top 30px
      right 30px
  .palette-status
    margin-top 200px
</style>

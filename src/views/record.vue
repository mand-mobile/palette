<template>
  <div class="palette-record">
    <div class="palette-record-top clearfix">
      <palette-searcher
        :placeholder="$t('record.searchTip')"
        @search="onSearchTheme"
      ></palette-searcher>
      <div class="palette-button-wrap">
        <el-button
          type="primary"
          round
          :loading="mandMobileInfoLoading"
          icon="el-icon-circle-plus"
          @click="doCreateTheme"
        >
          {{ $t('record.createBtn') }}
        </el-button>
        <el-button type="primary" icon="el-icon-share" circle @click="doShareThemes"></el-button>
        <el-button type="danger" icon="el-icon-upload" circle @click="doImportThemes"></el-button>
      </div>
    </div>
    <div class="palette-record-list clearfix">
      <template
        v-if="themeList && themeList.length"
      >
        <transition-group name="list-complete" tag="div">
          <palette-recorder
            v-for="(theme, index) in themeList"
            :key="`record-${index}`"
            :theme="theme"
            @delete="onDelete"
            @select="onSelect"
            @edit="showThemeDialog"
            @download="onDownload"
          ></palette-recorder>
        </transition-group>
      </template>
      <template v-else>
        <palette-status
          imgUrl="//manhattan.didistatic.com/static/manhattan/mfd/result-page/empty"
          :describe="$t('record.errorTip')"
        ></palette-status>
      </template>
    </div>

    <!-- theme info -->
    <el-dialog
      width="500px"
      title="sdfsdf"
      :visible.sync="themeFormVisible"
    >
      <el-form
        :model="themeForm"
        ref="themeForm"
        label-width="120px"
        label-position="left"
      >
        <el-form-item
          prop="title"
          :label="$t('record.dialogThemeName')"
          :rules="[{ required: true, message: $t('recorder.placeholder'), trigger: 'blur' }]"
        >
          <el-input
            v-model="themeForm.title"
            :placeholder="$t('recorder.placeholder')"
            auto-complete="off"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="version"
          :label="$t('record.dialogThemeVersion')"
          :rules="[{ required: true, message: $t('record.dialogThemeVersionTip'), trigger: 'blur' }]"
        >
          <el-select
            v-model="themeForm.version"
            disabled
          ></el-select>
          <!-- <el-select
            v-model="themeForm.version"
            :placeholder="$t('record.dialogThemeVersionTip')"
            disabled
          ></el-select> -->
        </el-form-item>
      </el-form>
      <div class="dialog-header" slot="title">
        <p class="title">{{ $t('record.dialogTitle') }}</p>
        <p class="describe">{{ $t('record.dialogDescribe') }}</p>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="themeFormVisible = false">{{ $t('record.messageCancel') }}</el-button>
        <el-button type="primary" @click="doSaveTheme">{{ $t('record.messageConfirm') }}</el-button>
      </div>
    </el-dialog>
    <el-dialog
      width="500px"
      :title="$t('record.importDialogTitle')"
      :visible.sync="importFormVisible"
      >
      <el-upload
        class="palette-importer"
        drag
        action="''"
        :show-file-list="false"
        :http-request="importHandler"
        >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">{{ $t('record.importDialogText')[0] }}<em>{{ $t('record.importDialogText')[1] }}</em></div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import dayjs from 'dayjs'
import PaletteSearcher from '../components/searcher'
import PaletteRecorder from '../components/recorder'
import PaletteStatus from '../components/status'
import { downloadText, safeGetValue } from '../utils'

export default {
  components: {
    PaletteSearcher,
    PaletteRecorder,
    PaletteStatus
  },
  data () {
    return {
      searchThemes: [],
      mandMobileInfoLoading: false,
      themeFormVisible: false,
      themeForm: {},
      importFormVisible: false
    }
  },
  computed: {
    ...mapState(['themes', 'mandMobileInfo']),
    themeList () {
      if (this.searchThemes.length) {
        return this.searchThemes
      } else {
        return this.themes
      }
    }
  },
  methods: {
    ...mapMutations(['update', 'createTheme', 'deleteTheme', 'updateThemeInfo']),
    ...mapActions({
      getMandMobileInfo: 'GET_MAND_MOBILE_RELEASE',
      getMandMobileVariables: 'GET_MAND_MOBILE_VARIABLES',
      saveThemeStore: 'SAVE_THEMES_STORE',
      getThemesStore: 'GET_THEMES_STORE'
    }),
    onDelete (themeIndex) {
      this.$confirm(this.$t('record.messageDescribe'), this.$t('record.messageTitle'), {
        confirmButtonText: this.$t('record.messageConfirm'),
        cancelButtonText: this.$t('record.messageCancel'),
        type: 'warning'
      }).then(() => {
        this.deleteTheme(themeIndex)
        this.saveThemeStore()
      }).catch(() => {})
    },
    onSelect (themeIndex) {
      this.$router.push({
        path: '/list',
        query: { themeIndex }
      })
    },
    onDownload (themeIndex) {
      this.$router.push({
        path: '/generate',
        query: { themeIndex }
      })
    },
    onSearchTheme (keyword) {
      if (keyword) {
        this.searchThemes = this.themes.filter(theme => {
          const title = theme.title.toLocaleLowerCase()
          return !!~title.indexOf(keyword.toLocaleLowerCase())
        })
      } else {
        this.searchThemes = this.themes
      }
    },

    showThemeDialog (themeIndex) {
      if (this.$refs.themeForm) {
        this.$refs.themeForm.resetFields()
      }

      let theme = ''
      if (this.themes && themeIndex >= 0) {
        theme = this.themes[themeIndex]
      }
      this.themeForm = !theme ? {
        title: '',
        version: this.mandMobileInfo,
        themeIndex: -1
      } : {
        title: theme.title,
        version: theme.version,
        themeIndex
      }
      this.themeFormVisible = true
    },
    doCreateTheme () {
      if (this.themes && this.themes.length > 20) {
        this.$message.error(this.$t('record.errorLimit'))
        return
      }
      this.mandMobileInfoLoading = true
      this.getMandMobileInfo().then(() => {
        this.showThemeDialog(-1)
      }).catch(() => {
        this.$message({
          message: this.$t('record.errorMandMobile'),
          type: 'warning'
        })
        // error.message &&
        //   this.$message(error.message)
      }).finally(() => {
        this.mandMobileInfoLoading = false
      })
    },
    doShareThemes () {
      this.getThemesStore()
        .then(themes => {
          const contentText = JSON.stringify(themes)
          if (!contentText) {
            return
          }
          const filename = `palette-${dayjs().format('YYYY-MM-DD')}.json`
          downloadText(contentText, filename)
        })
    },
    doImportThemes () {
      this.importFormVisible = true
    },
    doSaveTheme () {
      this.$refs.themeForm.validate(valid => {
        if (valid) {
          this.themeFormVisible = false
          if (this.themeForm.themeIndex < 0) {
            this.getMandMobileVariables({
              version: this.themeForm.version,
              type: 'lib'
            }).then(res => {
              if (res && res.length) {
                this.createTheme({
                  themeInfo: this.themeForm,
                  variables: {
                    basic: safeGetValue(res[0], 'data', {}),
                    components: safeGetValue(res[1], 'data', {})
                  }
                })
                this.saveThemeStore()
              } else {
                this.$message({
                  message: this.$t('record.errorMandMobileVariables'),
                  type: 'warning'
                })
              }
            })
          } else {
            this.updateThemeInfo(this.themeForm)
          }
        }
      })
    },
    importHandler (payload) {
      this.importFormVisible = false
      const { file } = payload

      try {
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
          const contentText = event.target.result
          const themes = JSON.parse(contentText)
          this.update({ themes })
          this.saveThemeStore()
        }
        FileReader.onabort = error => {
          throw error
        }
        FileReader.onerror = error => {
          throw error
        }
        fileReader.readAsText(file)
      } catch (error) {
        this.$message.error(this.$t('record.errorImport'))
      }
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
    .palette-button-wrap
      float right
  .palette-record-list
    margin-top 30px
    .palette-recorder
      float left
      width 32%
      margin-bottom 20px
      margin-right 2%
      &:nth-child(3n)
        margin-right 0
    .palette-status
      margin-top 200px
  .dialog-header
    .title
      font-size 18px
      font-weight 500
      color #333
    .describe
      margin-top 10px
      font-size 12px
      color #999
  .palette-importer
    .el-upload
      display block
    .el-upload-dragger
      width 100%

.list-complete-item
  transition all 1s
  display inline-block
  margin-right 10px
.list-complete-enter, .list-complete-leave-to
  opacity 0
  transform translateX(30px)
.list-complete-leave-active
  position absolute
</style>

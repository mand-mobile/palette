<template>
  <div class="palette-recorder" @click="onClick(theme.index)">
    <div class="palette-recorder-top">
      <p
        v-if="!editable"
        v-text="theme.title"
        class="title"
      ></p>
      <div v-else>
        <el-input
          v-model.trim="title"
          :placeholder="$t('recorder.placeholder')"
          @click.native.stop
        ></el-input>
        <el-button size="small" @click.native.stop="changeTitle(false)">{{ $t('recorder.cancel') }}</el-button>
        <el-button type="primary" size="small" @click.native.stop="changeTitle(true)">{{ $t('recorder.confirm') }}</el-button>
      </div>
    </div>
    <div class="palette-recorder-detail">
      <ul class="color-list clearfix">
        <li class="color-item" :style="{background: color['color-primary']}"></li>
        <li class="color-item" :style="{background: color['color-primary-tap']}"></li>
        <li class="color-item" :style="{background: color['color-primary-background']}"></li>
      </ul>
      <p class="text">{{ `${$t('recorder.modify')} ${dayjs(theme.lastModify).format("YYYY/MM/DD HH:mm")}` }}</p>
    </div>
    <div class="palette-recorder-operate">
      <el-tooltip class="item" effect="dark" :content="$t('recorder.edit')" placement="top">
        <i class="el-icon-edit" @click.stop="$emit('edit', theme.index)"></i>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" :content="$t('recorder.download')" placement="top">
        <i class="el-icon-download" @click.stop="$emit('download', theme.index)"></i>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" :content="$t('recorder.delete')" placement="top">
        <i class="el-icon-delete" @click.stop="$emit('delete', theme.index)"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'recorder',
  props: ['theme'],
  data () {
    return {
      title: this.theme.title,
      editable: false
    }
  },
  computed: {
    color () {
      return this.theme.data.basic.color
    }
  },
  methods: {
    dayjs,
    changeTitle (isConfirm) {
      if (isConfirm) {
        if (this.title !== '') {
          // change store
          this.editable = false
        } else {
          this.$message.error('请输入主题标题')
        }
      } else {
        this.title = this.theme.title
        this.editable = false
      }
    },
    onClick (themeIndex) {
      if (!this.editable) {
        this.$emit('select', themeIndex)
      }
    }
  }
}
</script>

<style lang="stylus">
.palette-recorder
  position relative
  float left
  width 100%
  padding 20px
  box-sizing border-box
  box-shadow 0 2px 8px #ebebeb
  cursor pointer
  transition all .3s
  background #fff
  // &:hover
  //   background #f5f5f5
  .palette-recorder-top
    height 32px
    .title
      font-size 24px
      font-weight 500
      color #333
    .el-input
      float left
      width 400px
      input
        height 32px
        background #f0f0f0
        border none
    .el-button
      float right
      margin-left 10px
  .palette-recorder-detail
    margin-top 20px
    .color-list
      .color-item
        float left
        width 20px
        height 20px
        margin-right 5px
        border-radius 20px
    .text
      margin-top 10px
      font-size 12px
      color #ccc
  .palette-recorder-operate
    position absolute
    bottom 20px
    right 20px
    i
      margin-left 10px
      padding 5px
      color #ccc
      cursor pointer
</style>

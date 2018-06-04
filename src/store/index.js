import Vue from 'vue'
import Vuex from 'vuex'
import { defaultTheme, styleVariableInfo } from '../data'
import { safeGetValue } from '../utils'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    themes: [{
      title: `测试自定义主题`,
      data: JSON.parse(JSON.stringify(defaultTheme)),
      lastModify: Date.now(),
      index: 0
    }],
    styleVariableInfo
  },
  mutations: {
    createTheme (state) {
      const index = state.themes.length
      const newTheme = {
        title: `Untitled Theme`,
        data: JSON.parse(JSON.stringify(defaultTheme)),
        lastModify: Date.now(),
        index
      }
      state.themes.push(newTheme)
    },
    deleteTheme (state, index) {

    },
    updateTheme (state, options = {}) {
      const { themeIndex, moduleName, itemName, name, key } = options
      const theme = state.themes[themeIndex]
      const 

      if (!theme) {
        return null
      }
      

    }
  }
})

export default store

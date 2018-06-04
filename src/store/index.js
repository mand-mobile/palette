import Vue from 'vue'
import Vuex from 'vuex'
import { defaultTheme, styleVariableInfo } from '../data'
import { safeGetValue, safeSetValue, setCssVariable } from '../utils'

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
      const { themeIndex, moduleName, itemName, name, value } = options
      const theme = state.themes[themeIndex]
      const variables = safeGetValue(theme, 'data', null)

      if (!theme || !variables) {
        return null
      }

      safeSetValue(variables, `${moduleName}.${itemName}['${name}']`, value)
      console.log(name, value)
      setCssVariable(name, value)
    }
  }
})

export default store

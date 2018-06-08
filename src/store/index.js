import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { defaultTheme, styleVariableInfo } from '../data'
import {
  safeGetValue,
  safeSetValue,
  setCssVariable,
  localStore
} from '../utils'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    themes: [],
    styleVariableInfo,
    mandMobileInfo: '',
    localStoreUnsupport: false
  },
  mutations: {
    update (state, data) {
      Object.keys(data).map((key) => {
        state[key] = data[key]
      })
    },
    createTheme (state, themeInfo) {
      const index = state.themes.length
      const newTheme = {
        data: JSON.parse(JSON.stringify(defaultTheme)),
        lastModify: Date.now(),
        index,
        ...themeInfo
      }
      state.themes.push(newTheme)
    },
    deleteTheme (state, index) {
      state.themes.splice(index, 1)
    },
    updateThemeInfo (state, themeInfo) {
      state.themes[themeInfo.themeIndex] = {
        ...state.themes[themeInfo.themeIndex],
        ...themeInfo
      }
    },
    updateThemeVariables (state, options = {}) {
      const { themeIndex, moduleName, itemName, name, value } = options
      const theme = state.themes[themeIndex]
      const variables = safeGetValue(theme, 'data', null)

      if (!theme || !variables) {
        return null
      }
      theme.lastModify = Date.now()
      safeSetValue(variables, `${moduleName}['${itemName}']['${name}']`, value)
      setCssVariable(name, value)
    }
  },
  actions: {
    GET_MAND_MOBILE_RELEASE ({ commit }) {
      return axios.get(`https://unpkg.com/mand-mobile/package.json?${Date.now()}`)
        .then(res => {
          if (res.status === 200) {
            commit('update', {
              mandMobileInfo: res.data.version
            })
          }
        })
    },
    GET_THEMES_STORE ({ commit }) {
      const themes = localStore('themes')
      if (themes) {
        commit('update', { themes })
      } else if (themes === null) {
        commit('update', {
          localStoreUnsupport: true
        })
      }
      return themes
    },
    SAVE_THEMES_STORE ({ state }) {
      return localStore('themes', state.themes)
    }
  }
})

export default store

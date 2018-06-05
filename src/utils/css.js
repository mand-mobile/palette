import { styleVariableInfo } from '../data'
import { traverseObject } from './data'

export function setCssVariable (name, value) {
  document.body.style.setProperty(`--${name}`, value)
}

export function insertCssVariable (css) {
  let isCssExisting = true
  let elem = document.getElementById('theme-style-variable')

  if (!elem) {
    elem = document.createElement('style')
    elem.setAttribute('type', 'text/css')
    elem.setAttribute('id', 'theme-style-variable')
    isCssExisting = false
  }

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  if (!isCssExisting) {
    document.getElementsByTagName('head')[0].appendChild(elem)
  }

  document.body.setAttribute('style', '')
}

export function generateCssVariable (variables) {
  const css = []

  traverseObject(variables, (name, value) => {
    /**
     * If the value is a base variable,
     * it needs to be packaged as css variable
     */
    if (styleVariableInfo.hasOwnProperty(value)) {
      value = `var(--${value})`
    }
    css.push(`--${name}:${value}`)
  })

  return `body{${css.join(';')}}`
}

import { styleVariableInfo } from '../data'
import { traverseObject } from './data'

export function setCssVariable (name, value) {
  /**
   * If the value is a basic variable,
   * it needs to be packaged as css variable
   */
  if (styleVariableInfo.hasOwnProperty(value)) {
    value = `var(--${value})`
  }
  document.body.style.setProperty(`--${name}`, value)
}

export function insertCss (css, id, clear = true) {
  let isCssExisting = true
  let elem = document.getElementById(id)

  if (!elem) {
    elem = document.createElement('style')
    elem.setAttribute('type', 'text/css')
    elem.setAttribute('id', id)
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

  if (clear) {
    document.body.setAttribute('style', '')
  }
}

export function generateCssVariable (variables) {
  const css = []

  traverseObject(variables, (name, value) => {
    /**
     * If the value is a basic variable,
     * it needs to be packaged as css variable
     */
    if (styleVariableInfo.hasOwnProperty(value)) {
      value = `var(--${value})`
    }
    css.push(`--${name}:${value}`)
  })

  return `body{${css.join(';')}}`
}

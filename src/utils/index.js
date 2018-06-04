export function safeGetValue (source, key, defaults = '') {
  const factory = new Function('source', 'defaults', `try { return source.${key} === undefined ? defaults : source.${key} } catch (e) { return defaults }`)
  return factory(source, defaults)
}

export function safeSetValue (source, key, value) {
  const factory = new Function('source', 'value', `try { source.${key} = value } catch (e) { }`)
  return factory(source, value)
}

function getStorage (type, key) {
  const storage = window[type]
  const json = /^[{[][\w\W]*[}\]]$/
  try {
    const item = storage.getItem(key) || undefined
    return json.test(item)
      ? JSON.parse(storage.getItem(key)) || undefined
      : item
  } catch (e) {
    return null
  }
}

function setStorage (type, key, value) {
  const storage = window[type]
  let val = null
  if (typeof value === 'object') {
    val = JSON.stringify(value)
  } else {
    val = value
  }
  try {
    storage.setItem(key, val)
    return true
  } catch (e) {
    return false
  }
}

export function localStore (key, value) {
  if (value === undefined) {
    return getStorage('localStorage', key)
  } else {
    return setStorage('localStorage', key, value)
  }
}

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
  for (const category in variables) {
    if (variables.hasOwnProperty(category)) {
      const categoryVariable = variables[category]
      for (const module in categoryVariable) {
        if (categoryVariable.hasOwnProperty(module)) {
          const moduleVariable = categoryVariable[module]
          for (const key in moduleVariable) {
            if (moduleVariable.hasOwnProperty(key)) {
              const value = moduleVariable[key]
              css.push(`--${key}:${value}`)
            }
          }
        }
      }
    }
  }
  return `body{${css.join(';')}}`
}

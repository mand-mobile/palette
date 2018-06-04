function composeKeys (key) {
  if (Array.isArray(key)) {
    key = key.reduce((pre, cur, index) => {
      return !index ? cur : `${pre}['${cur}']`
    })
  }
  return key
}

export function safeGetValue (source, key, defaults = '') {
  const factory = new Function('source', 'defaults', `try { return source.${composeKeys(key)} === undefined ? defaults : source.${composeKeys(key)} } catch (e) { return defaults }`)
  return factory(source, defaults)
}

export function safeSetValue (source, key, value) {
  const factory = new Function('source', 'value', `try { source.${composeKeys(key)} = value } catch (e) { }`)
  return factory(source, value)
}

export function isPlainObject (obj) {
  let proto, Ctor
  // Detect obvious negatives
  if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
    return false
  }
  proto = Object.getPrototypeOf(obj)
  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true
  }
  // Objects with prototype are plain if they were constructed by a global Object function
  Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor
  return typeof Ctor === 'function' && Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object)
}

export function traverseObject (data, handler, deepest = true) {
  let path = []
  let level = 0
  let forceBreak = false
  const walk = curData => {
    for (const key in curData) {
      if (forceBreak) {
        break
      }
      if (curData.hasOwnProperty(key)) {
        const subData = curData[key]
        path[level] = key
        if (subData && isPlainObject(subData)) {
          level++
          walk(subData)
        } else {
          forceBreak = !!handler(key, subData, path)
          if (!deepest || forceBreak) {
            break
          }
        }
      }
    }
    path.length = level
    level--
  }

  walk(data)
}

export function findKeyValue (data, key) {
  let map = {}
  traverseObject(data, (key, value, path) => {
    map = {
      ...map,
      ...safeGetValue(data, path.slice(0, path.length - 1), {})
    }
  }, false)
  return map[key]
}

export function findKeyFrom (data, key) {
  let path = []
  traverseObject(data, (curKey, curValue, curPath) => {
    if (curKey === key) {
      path = JSON.parse(JSON.stringify(curPath))
      return true
    }
  })
  return path
}

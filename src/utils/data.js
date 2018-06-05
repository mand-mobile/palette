export function safeGetValue (source, key, defaults = '') {
  const factory = new Function('source', 'defaults', `try { return source.${key} === undefined ? defaults : source.${key} } catch (e) { return defaults }`)
  return factory(source, defaults)
}

export function safeSetValue (source, key, value) {
  const factory = new Function('source', 'value', `try { source.${key} = value } catch (e) { }`)
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
  const walk = curData => {
    for (const key in curData) {
      if (curData.hasOwnProperty(key)) {
        const subData = curData[key]
        path[level] = key
        if (subData && isPlainObject(subData)) {
          level++
          walk(subData)
        } else {
          handler(key, subData, path)
          if (!deepest) {
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
      ...safeGetValue(data, path.slice(0, path.length - 1).join('.'), {})
    }
  }, false)
  return map[key]
}

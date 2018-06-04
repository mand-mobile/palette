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

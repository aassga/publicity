export function setLocal (par0, par1) {
  if (typeof par0 === 'object') {
    setLocalByObj(par0)
  }
  setLocalDefault(par0, par1)
}

export function setLocalByObj (obj) {
  localStorage.setItem(obj.key, obj.val)
}

export function setLocalDefault (key, val) {
  localStorage.setItem(key, val)
}

export function getLocal (key) {
  return localStorage.getItem(key)
}

export function removeLocal (key) {
  localStorage.removeItem(key)
}

export function clearLocal () {
  localStorage.clear()
}

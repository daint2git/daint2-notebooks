import isObject from './isObject'

export default function convertDomStyleToCssStyle(styles) {
  if (!isObject(styles)) {
    return null
  }

  const result = Object.keys(styles).reduce((result, key) => {
    const length = key.toString().length
    let replacedProperty = ''
    for (let i = 0; i < length; i++) {
      const current = key.charAt(i)
      if (current === current.toUpperCase()) {
        replacedProperty += `-${current.toLowerCase()}`
      } else {
        replacedProperty += current
      }
    }

    return [...result, `  ${replacedProperty}: ${styles[key]};`]
  }, [])

  return result.join('\n')
}

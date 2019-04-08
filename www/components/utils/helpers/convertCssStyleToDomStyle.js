import isObject from './isObject'

export default function convertCssStyleToDomStyle(styles) {
  if (!isObject(styles)) {
    return null
  }

  const result = Object.keys(styles).reduce((result, key) => {
    const [first, ...rest] = key.split('-')
    const replacedProperty = rest.reduce(
      (accumulator, currentValue) =>
        accumulator +
        currentValue.charAt(0).toUpperCase() +
        currentValue.substring(1, currentValue.length),
      first,
    )
    result[replacedProperty] = styles[key]
    return result
  }, {})

  return result
}

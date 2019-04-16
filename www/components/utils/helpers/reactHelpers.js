import isFunction from './isFunction'

export function setRef(ref, value) {
  if (isFunction(ref)) {
    ref(value)
  } else if (ref) {
    ref.current = value
  }
}

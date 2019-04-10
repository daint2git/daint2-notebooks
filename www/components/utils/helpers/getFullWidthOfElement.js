function getFullWidthOfElement(element) {
  const width = element.offsetWidth
  const style = window.getComputedStyle(element)

  return ['left', 'right']
    .map(side => parseInt(style[`margin-${side}`]))
    .reduce((total, side) => total + side, width)
}

export default getFullWidthOfElement

function getFullHeightOfElement(element) {
  const height = element.offsetHeight
  const style = window.getComputedStyle(element)

  return ['top', 'bottom']
    .map(side => parseInt(style[`margin-${side}`]))
    .reduce((total, side) => total + side, height)
}

export default getFullHeightOfElement

export default function appendBr(string) {
  const splitted = string.split('\n')
  const result = splitted.reduce((accumulator, currentValue, currentIndex) => {
    const brTag = splitted.length - 1 !== currentIndex ? '<br />' : ''
    return accumulator + currentValue + brTag
  })
  return result
}

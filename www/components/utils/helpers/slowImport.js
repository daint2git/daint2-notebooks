export default function slowImport(value, ms = 500) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms)
  })
}

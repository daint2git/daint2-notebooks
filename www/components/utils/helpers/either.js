export default function either(value, tester = testValue => !!testValue) {
  return function orElse(orElse) {
    return tester(value) ? value : orElse
  }
}

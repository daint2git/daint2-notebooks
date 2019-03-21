import { TemplateTag } from 'common-tags'

const cssModuleNameTag = styles => {
  const className = (key = '') => styles[key] || key

  return new TemplateTag({
    onSubstitution(substitution) {
      return substitution || ''
    },

    onEndResult(endResult) {
      return endResult.length === 0
        ? null
        : endResult
            .trim()
            .split(' ')
            .reduce((result, key) => `${result} ${className(key)}`, '')
    },
  })
}

export default cssModuleNameTag

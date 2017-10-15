const path = require('path')
const stripIndent = require('strip-indent')
const linter = require('./linter')

module.exports = (css, settings) => {
  const babel = settings.babel || {}
  let options = Object.assign({
    reportNeedlessDisables: true,
  }, settings.stylelint, {
    code: stripIndent(css),
    codeFilename: babel.filename,
  })

  delete options.babel
  delete options.fix

  linter(css, options)

  return css
}

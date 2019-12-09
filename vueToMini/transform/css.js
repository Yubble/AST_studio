const csstree = require('css-tree')

module.exports = source => {
  const cssAst = csstree.parse(source)

  csstree.walk(cssAst, node => {
    if (node.type === 'Dimension') {
      node.unit = 'rpx'
    }
  })

  const output = csstree.generate(cssAst)
  return output
}

const recast = require('recast')

module.exports = source => {
  // 首先将传进来的js源码转为ast模式
  const ast = recast.parse(source)
  // 查看标识
  // console.log('token is ', ast.tokens)
  const builder = recast.types.builders
  // console.log('builder is ', builder)
  
  const vueScript = ast.program.body[0]
  console.log('vue program is ', vueScript)
}

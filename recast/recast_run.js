const recast = require('recast')

recast.run((ast, printSource) => {
  // ast 输出ast格式
  // printSource 将ast重新组装成源码
  // console.log('ast is ', ast)
  printSource(ast)
})
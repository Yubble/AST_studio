const recast = require('recast')
const { expressionStatement, callExpression } = recast.types.builders

module.exports = source => {
  // 首先将传进来的js源码转为ast模式
  const ast = recast.parse(source)
  
  const vueScript = ast.program.body[0]

  // const newExp = expressionStatement()

  const newFun = callExpression({
    type: "Identifier",
    value: "page"
  }, [{
    type: "Literal",
    value: "123",
    raw: "'123'"
  }])

  // {
  //   type: 'ObjectExpression',
  //   properties: [
  //     {
  //       type: 'Property',
  //       method: false,
  //       shorthand: false,
  //       computed: false,
  //       key: {
  //         type: 'Identifier',
  //         name: 'name'
  //       },
  //       value: {
  //         type: 'Literal',
  //         value: 'ssss',
  //         raw: "'ssss'"
  //       }
  //     }
  //   ]
  // }

  console.log('newFun is ', newFun)

  // 将处理好的ast打印编译
  const output = recast.print(vueScript).code
  console.log('output is ', output)
}

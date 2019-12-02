const recast = require('recast')
const { expressionStatement, objectExpression, callExpression } = recast.types.builders

module.exports = source => {
  // 首先将传进来的js源码转为ast模式
  const ast = recast.parse(source)
  
  // 将vueScript的Ast对象获取出来
  const vueScriptAst = ast.program.body[0]
  // 获取出vueScript中被默认抛出的对象data,methods,mounted等
  const propertiesAst = vueScriptAst.declaration.properties
  // 过滤出所有属性
  // 写好data对象变量赋值
  let dataContent = null
  propertiesAst.forEach(ele => {
    if (ele.key.name === 'data') {
      dataContent = ele.value.body.body[0].argument
    }
  })

  // 小程序的data对象
  const dataObj = objectExpression([{
    type: 'Property',
    kind: 'init',
    key: {
      type: 'Identifier',
      name: 'data'
    },
    value: dataContent
  }])

  const newFun = expressionStatement(callExpression({
    type: "Identifier",
    name: "page"
  }, [dataObj]))

  console.log('newFun is ', newFun)

  // 将处理好的ast打印编译
  const output = recast.print(newFun).code
  console.log('output is ', output)
}

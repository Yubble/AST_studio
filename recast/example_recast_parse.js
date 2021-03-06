const recast = require("recast");
const { variableDeclaration, variableDeclarator, functionExpression } = recast.types.builders;

const code =
  `
  function add(a, b) {
    return a + b
  }
  `

const ast = recast.parse(code);

let add = ast.program.body[0]

add = variableDeclaration("const", [
  variableDeclarator(add.id, functionExpression(
    null,
    add.params,
    add.body
  ))
])

const output = recast.print(ast).code

console.log('output is ', output)
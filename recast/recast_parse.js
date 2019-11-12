const recast = require("recast");
const { variableDeclaration, variableDeclarator, functionExpression } = recast.types.builders;

const code =
  'function add(a, b) {'
  +  'return a + b'
  +'}'

const ast = recast.parse(code);

let add = ast.program.body[0]
// console.log(JSON.stringify(add))
add = variableDeclaration("const", [
  variableDeclarator(add.id, functionExpression(
    null,
    add.params,
    add.body
  ))
])

const output = recast.print(add).code
const preOutput = recast.prettyPrint(ast, { tabWidth: 2 }).code

console.log('output is ', output)
console.log('preOutput is ', preOutput)

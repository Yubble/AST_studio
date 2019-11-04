const esprima = require('esprima')
const { esprimaParseFun } = require('./demo')
require('colors')

console.log('esprimaParseFun is '.magenta, esprima.parse(esprimaParseFun))
/**
 * Script {
  type: 'Program',
  body:
   [ FunctionDeclaration {
       type: 'FunctionDeclaration',
       id: [Identifier],
       params: [],
       body: [BlockStatement],
       generator: false,
       expression: false,
       async: false } ],
  sourceType: 'script' }
*/

console.log('esprimaParseFun body is '.magenta, esprima.parse(esprimaParseFun).body[0].body.body)
/**
 * [ ReturnStatement {
    type: 'ReturnStatement',
    argument: Literal { type: 'Literal', value: 111, raw: '111' } } ]
*/

const esprima = require('esprima')
const { esprimaParseFunExpression } = require('./demo')
require('colors')

console.log('esprimaParseFunExpression is '.magenta, esprima.parse(esprimaParseFunExpression))
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

console.log('esprimaParseFunExpression body is '.magenta, esprima.parse(esprimaParseFunExpression).body[0].declarations[0].init.body.body)
/**
 * [ ReturnStatement {
    type: 'ReturnStatement',
    argument: Literal { type: 'Literal', value: 111, raw: '111' } } ]
*/

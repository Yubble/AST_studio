const esprima = require('esprima')
const { esprimaParse } = require('./demo')
require('colors')

// 对普通代码的parse解析
console.log('esprimaParse is '.magenta, esprima.parse(esprimaParse))
/**
 * Script {
  type: 'Program',
  body:
   [ VariableDeclaration {
       type: 'VariableDeclaration',
       declarations: [Array],
       kind: 'let' } ],
  sourceType: 'script' }
*/

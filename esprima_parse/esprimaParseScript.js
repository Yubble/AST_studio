const esprima = require('esprima')
const { esprimaParseScript } = require('./demo')
require('colors')

console.log('esprimaParseScript is '.magenta, esprima.parseScript(esprimaParseScript))
/**
 * Script {
  type: 'Program',
  body:
   [ VariableDeclaration {
       type: 'VariableDeclaration',
       declarations: [Array],
       kind: 'const' } ],
  sourceType: 'script' }
*/
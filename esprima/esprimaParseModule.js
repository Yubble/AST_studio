const esprima = require('esprima')
const { esprimaParseModule } = require('./demo')
require('colors')

console.log('esprimaParseModule is '.magenta, esprima.parseModule(esprimaParseModule))
/**
 * Module {
  type: 'Program',
  body:
   [ ExportNamedDeclaration {
       type: 'ExportNamedDeclaration',
       declaration: [VariableDeclaration],
       specifiers: [],
       source: null } ],
  sourceType: 'module' }
*/
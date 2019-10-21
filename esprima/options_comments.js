const esprima = require('esprima')
const { esprimaParse } = require('./demo')
require('colors')

// 显示注释且定位位置
console.log('esprimaParse comment is '.magenta, esprima.parse(esprimaParse, { comment: true, loc: true }).comments[0])
/**
 * { type: 'Line',
  value: ' 这是未知模式下的代码',
  loc:
   { start: { line: 1, column: 27 }, end: { line: 1, column: 40 } } }
*/

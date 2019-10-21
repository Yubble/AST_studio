const esprima = require('esprima')
const { esprimaParse } = require('./demo')
require('colors')

// 也可以用loc来定位代码的行列
console.log('esprimaParse loc is '.magenta, esprima.parse(esprimaParse, { loc: true }).loc)
// { start: { line: 1, column: 0 }, end: { line: 1, column: 40 } }
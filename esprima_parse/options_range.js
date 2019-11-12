const esprima = require('esprima')
const { esprimaParse } = require('./demo')
require('colors')

// 可以使用range来确定代码位置
console.log('esprimaParse range is '.magenta, esprima.parse(esprimaParse, { range: true }).range)
// [ 0, 40 ]

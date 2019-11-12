const esprima = require('esprima')
const { esprimaParse } = require('./demo')
require('colors')

// 可以使用tokens来快速提取代码关键部分
console.log('esprimaParse token is '.magenta, esprima.parse(esprimaParse, { tokens: true, range: true }).tokens)
/**
 * [ { type: 'Keyword', value: 'let', range: [ 0, 3 ] },
  { type: 'Identifier', value: 'answer', range: [ 4, 10 ] },
  { type: 'Punctuator', value: '=', range: [ 11, 12 ] },
  { type: 'String', value: "'test unknow'", range: [ 13, 26 ] } ]
*/

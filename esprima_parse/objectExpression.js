const esprima = require('esprima')
const { esprimaObject } = require('./demo')
require('colors')

// 取出对象中的表达
console.log('Property is ', esprima.parse(esprimaObject).body[0].declarations[0].init.properties)
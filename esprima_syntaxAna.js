const esprima = require('esprima')

const esprimaParse = "let answer = 'test unknow'"
const esprimaParseModule = "const answer = 'test module'"
const esprimaParseScript = "const answer = 'test script'"

console.log('esprimaParse is ', esprima.parse(esprimaParse))
console.log('esprimaParseModule is ', esprima.parseModule(esprimaParseModule))
console.log('esprimaParseScript is ', esprima.parseScript(esprimaParseScript))

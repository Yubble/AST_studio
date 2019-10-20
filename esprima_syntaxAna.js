const esprima = require('esprima')

const esprimaParse = "let answer = 'test unknow'"
const esprimaParseFun = "function fn1 () {"
  +"return 111"
  +"}"
// parseModule方法可以处理带es module的语句，带es module的语句也只有这个方法可以解析
const esprimaParseModule = "export const answer = 'test module'"
const esprimaParseScript = "const answer = 'test script'"

console.log('esprimaParse is ', esprima.parse(esprimaParse))
// 可从declarations中找到详细信息
console.log('esprimaParse body declaration is ', esprima.parse(esprimaParse).body[0].declarations)
console.log('esprimaParseFun is ', esprima.parse(esprimaParseFun))
console.log('esprimaParseModule is ', esprima.parseModule(esprimaParseModule))
console.log('esprimaParseScript is ', esprima.parseScript(esprimaParseScript))

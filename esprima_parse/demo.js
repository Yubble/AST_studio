exports.esprimaParse = "let answer = 'test unknow' // 这是未知模式下的代码"
exports.esprimaParseFun = "function fn1 () {"
  +"return 111"
  +"}"
// parseModule方法可以处理带es module的语句，带es module的语句也只有这个方法可以解析
exports.esprimaParseModule = "export const answer = 'test module'"
exports.esprimaParseScript = "const answer = 'test script'"

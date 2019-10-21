const esprima = require('esprima')
const { esprimaParse } = require('./demo')
require('colors')

// 使用最后一个参数可以刷出代码的节点信息Syntax Delegate
esprima.parse(esprimaParse, {} ,(node, metadata) => {
  // 轮询解析node类型
  console.log('esprimaParse callback node is '.blue, node)
  console.log('esprimaParse callback metadata is '.blue, metadata)
})
/**
 * delegate会将代码片段轮询，并遍历出所有的节点信息
 * 例如：let answer = 'test unknow
 * Identifier: answer
 * Literal: test unknow
 * 
*/


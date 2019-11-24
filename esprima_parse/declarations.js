const esprima = require('esprima')
const { esprimaParse } = require('./demo')
require('colors')

// 可从declarations中找到详细信息
console.log('body is '.gray, esprima.parse(esprimaParse).body[0])
console.log('esprimaParse body declaration is '.magenta, esprima.parse(esprimaParse).body[0].declarations)
/**
 * [ VariableDeclarator {
    type: 'VariableDeclarator',
    id: Identifier { type: 'Identifier', name: 'answer' },
    init:
     Literal { type: 'Literal', value: 'test unknow', raw: "'test unknow'" } } ]
*/
const esprima = require('esprima');
const readline = require('readline');

const CYAN = '\x1b[36m';
const RESET = '\x1b[0m'
let source = 'let ooo = 34;'
              +'(function (){'
              +' console.log(ooo)'
              +'})()'

const tokens = esprima.tokenize(source, { range: true })
// console.log('tokens is ', tokens)
const ids = tokens.filter(x => x.type === 'Identifier')
// 重新排序
const markers = ids.sort((a, b) => { return b.range[0] - a.range[0] })
console.log('markers is ', markers)
markers.forEach(t => {
  const id = CYAN + t.value + RESET
  const start = t.range[0]
  const end = t.range[1]
  source = source.slice(0, start) + id + source.slice(end)
})
console.log(source)

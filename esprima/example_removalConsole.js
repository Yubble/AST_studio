const esprima = require('esprima');
const readline = require('readline');

function isConsoleCall(node) {
  return (node.type === 'CallExpression') &&
      (node.callee.type === 'MemberExpression') &&
      (node.callee.object.type === 'Identifier') &&
      (node.callee.object.name === 'console');
}

function removeCalls(source) {
  const entries = [];
  esprima.parseScript(source, {}, function (node, meta) {
    if (isConsoleCall(node)) {
      // console.log('isConsoleCall node is ', node)
      // console.log('meta is ', meta)
      entries.push({
          start: meta.start.offset,
          end: meta.end.offset
      });
    }
  });
  entries.sort((a, b) => { return b.end - a.end }).forEach(n => {
    console.log('source is ', source)
    source = source.slice(0, n.start) + source.slice(n.end);
  });
  return source;
}

let source = '';
let exampleSource = "function jin() {"
  + "console.log(31231);"
  + "return 332"
+"}"
// readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// .on('line', line => {
//   source += line + '\n'
// })
// .on('close', () => {
//   // ctrl + D 可触发
//   console.log(removeCalls(source))
// });
console.log('remove console result is ', removeCalls(exampleSource))

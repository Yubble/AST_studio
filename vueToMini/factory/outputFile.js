const fs = require('fs')

module.exports = (fileName, source) => {

  // 首先创建小程序文件夹
  if (!fs.existsSync('miniSrc')) { fs.mkdirSync('./miniSrc') }
  fs.writeFileSync('./miniSrc/' + fileName, source)
  // fs.mkdirSync('./miniSrc')
  // console.log('创建完成')

  // 写入文件
  // fs.writeFileSync(fileName, source)
  // console.log('读写完成')
}
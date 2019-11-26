const path = require('path')
const fs = require('fs')
const { signObj } = require('../tempConfig')

module.exports = vueName => {
  // 定位.vue文件位置
  const vuePath = path.resolve(__dirname, `../../astDemo/${vueName}`)
  // 取出.vue文件中源码
  const vueSource = fs.readFileSync(vuePath, 'utf-8')

  // 定位template开始下标
  const tempStartIndex = vueSource.indexOf(signObj.tempStart)
  const tempStartLen = signObj.tempStart.length
  // 定位template结束下标
  const tempEndIndex = vueSource.indexOf(signObj.tempEnd)
  const template = vueSource.slice(tempStartIndex + tempStartLen, tempEndIndex)

  // 定位script开始下标
  const scriptStartIndex = vueSource.indexOf(signObj.scriptStart)
  const scriptStartLen = signObj.scriptStart.length
  // 定位script结束下标
  const scriptEndIndex = vueSource.indexOf(signObj.scriptEnd)
  const script = vueSource.slice(scriptStartIndex + scriptStartLen, scriptEndIndex)

  return {
    template,
    script
  }
}
// 首先读取.vue文件
const convertToWxml = require('./transform/html')
const convertToScript = require('./transform/script')
const convertToWxss = require('./transform/css')
const generateFile = require('./factory/outputFile')
const { template, script, style } = require('./vueSource/index')('resource.vue')

// 生成wxml文件
const miniWxml = convertToWxml(template)
// 生成script脚本文件
const miniScript = convertToScript(script)
// 生成css文件
const miniWxss = convertToWxss(style)


// 写入文件 wxml
generateFile('test.wxml', miniWxml)
generateFile('test.js', miniScript)
generateFile('test.wxss', miniWxss)

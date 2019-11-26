// 首先读取.vue文件
const convertToWxml = require('./transform/html')
const convertToScript = require('./transform/script')
const converToJS = require('./transform/script')
const { template, script } = require('./vueSource/index')('resource.vue')

// 生成wxml文件
const miniWxml = convertToWxml(template)
// 生成script脚本文件
const miniScript = convertToScript(script)

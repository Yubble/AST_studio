// 首先读取.vue文件
const path = require('path')
const fs = require('fs')
const vuePath = path.resolve(__dirname, '../astDemo/resource.vue')
// 取出vue中源码
const vueSource = fs.readFileSync(vuePath, 'utf-8')

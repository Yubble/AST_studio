// 首先读取.vue文件
const path = require('path')
const fs = require('fs')
const { signObj, tagsReg } = require('./config')

const vuePath = path.resolve(__dirname, '../astDemo/resource.vue')
// 取出vue中源码
const vueSource = fs.readFileSync(vuePath, 'utf-8')

// template开始点
const tempStartIndex = vueSource.indexOf(signObj.tempStart)
const tempStartLen = signObj.tempStart.length

// template结束
const tempEndIndex = vueSource.indexOf(signObj.tempEnd)

const templateRaw = vueSource.slice(tempStartIndex + tempStartLen, tempEndIndex)

const miniTemp = templateRaw
                .replace(tagsReg.toViewStartTag, '<view ')
                .replace(tagsReg.toViewEndTag, '</view>')
                .replace(tagsReg.toTextStartTag, '<text ')
                .replace(tagsReg.toTextEndTag, '</text>')
                .replace(tagsReg.toBlockStartTag, '<block ')
                .replace(tagsReg.toBlockEndTag, '</block>')

console.log('miniTemp is ', miniTemp)

// console.log('type is ', typeof vueSource)

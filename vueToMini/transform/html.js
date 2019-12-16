const { tagsReg } = require('../tempConfig')
// const createHtmlDom = require('htmldom')

module.exports = source => {

  // const $ = createHtmlDom(source)

  // $('div.wrap').replaceWith('<block>')

  // const resHtml = $.html()

  // console.log('html is ', resHtml)

  const wxml = source
    .replace(tagsReg.toViewStartTag, '<view ')
    .replace(tagsReg.toViewEndTag, '</view>')
    .replace(tagsReg.toTextStartTag, '<text ')
    .replace(tagsReg.toTextEndTag, '</text>')
    .replace(tagsReg.toBlockStartTag, '<block ')
    .replace(tagsReg.toBlockEndTag, '</block>')
    .replace(tagsReg.toTxtCloseTag, '<text>')
    .replace(tagsReg.clickEvent, 'bindtap')

  return wxml
}
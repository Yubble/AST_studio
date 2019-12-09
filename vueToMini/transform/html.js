const { tagsReg } = require('../tempConfig')

module.exports = source => {
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
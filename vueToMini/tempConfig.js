exports.signObj = {
  tempStart: '<template>',
  tempEnd: '</template>',
  styleStart: '<style lang="css">',
  styleEnd: '</style>',
  scriptStart: '<script>',
  scriptEnd: '</script>'
}

exports.tagsReg = {
  toViewStartTag: /(  <h1 )|(  <h2 )|(<s )|(<em )|(<ul )|(<li )|(<dl )|(<i )/g,
  toViewEndTag: /(<\/h1>)|(<\/h2>)|(<\/s>)|(<\/em>)|(<\/ul>)|(<\/li>)|(<\/dl>)|(<\/i>)/g,
  toTextStartTag: /(<b )|(  <span )/g,
  toTextEndTag: /(<\/b>|(<\/span>))/g,
  toTxtCloseTag: /(<b>)/g,
  toBlockStartTag: /(  <div )|(<p )/g,
  toBlockEndTag: /(  <\/div>)|(<\/p>)/g,
  clickEvent: /@click/g
}

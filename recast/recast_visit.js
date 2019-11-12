const recast = require('recast')

recast.run((ast, printSource) => {
  recast.visit(ast, {
    visitExpressionStatement({ node }) {
      console.log('node is ', node)
      return false
    }
  })
})


// node recast/recast_visit.js recast/demo.js
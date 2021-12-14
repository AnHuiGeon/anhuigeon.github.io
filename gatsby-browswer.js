const React = require("react")
const IndexPage = require("./src/templates/index")

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  console.log('element:',element)
  console.log('props:',props)
  return <IndexPage {...props}>{element}</IndexPage>
}
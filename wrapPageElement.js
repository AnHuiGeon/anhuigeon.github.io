import IndexPage from "./src/templates/index.js"
import React from 'react';
const wrapPageElement = ({ element, props }) => {
  console.log('element:',element)
  console.log('props:',props)
  return (
    <>
      <IndexPage>
        {element}
      </IndexPage>
    </>
  )
}
export default wrapPageElement
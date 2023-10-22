import React from 'react'
import Code from '../../../pages/compiler/index'

function page({params}) {
    const language = params.lang
  return (
    <Code language={language}/>
  )
}

export default page
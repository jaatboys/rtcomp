import React from 'react'
import HomeMain from '../../pages/Tutorials/index'

function page({params}) {
    const route = params.id;

    switch(route){
       case "programming-language-to-learn": return <HomeMain/>

       
    }
    
  return (
    <div></div>
  )
}

export default page

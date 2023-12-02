import React from 'react'
import Typewriter from 'typewriter-effect'


const TypeWriterTitle = () => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter)=>{
        typewriter.typeString("A Chrome Extension")
        .pauseFor(2000).deleteAll()
        .typeString("Integrated With AI")
        .pauseFor(2000).deleteAll()
        .typeString("Get your customized Cover Letter From AI")
        .pauseFor(2000).deleteAll()
        .start()
      }}
    />
  )
}

export default TypeWriterTitle
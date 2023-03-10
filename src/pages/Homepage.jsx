import React from 'react'
import useRandomString from '../hooks/useRandomString'
import { useState } from 'react';


const Homepage = () => {
  const [randomString,setRandomString] = useRandomString();

  return (
    <div>
    <div>Homepage</div>
    <div>{randomString}</div>
    <button style={{width:"100px",height:"30px"}} onClick={setRandomString}>Click me</button>
    </div>
  )
}

export default Homepage
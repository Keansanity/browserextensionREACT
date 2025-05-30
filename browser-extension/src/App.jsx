import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import cloud from './assets/cloud.png'


function App() {

  return (
    <>
      <Card extensionDesc={"Quickly inspect page layouts and visualize element boundaries."} extensionName={'DevLens'} extensionLogo={cloud}/>
    </>
  )
}

export default App

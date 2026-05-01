import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from './camponetes/Nav'
import Banes from './camponetes/Banes'
import Head from './camponetes/Head'
import Card from './camponetes/Card'
import Card1 from './camponetes/Card1'
import Card2 from './camponetes/Card2'
import { useEffect, useRef } from "react"
import Glider from "glider-js"
import "glider-js/glider.min.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Banes/>
      <h2 className='h2'>Ofertas</h2>
      <Card/>
      <Card1/>
      <Card2/>
       <Head/>
    </>
  )
}

export default App

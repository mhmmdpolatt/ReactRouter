import { useState } from 'react'

import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/home'
import Menu from './components/menu'
import Contact from './components/contact'
import About from './components/about'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    <Footer/>
    </>
  )
}

export default App

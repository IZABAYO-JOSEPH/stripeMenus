  import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Sidebar from './sidebar'
import"./index.css"
import Submenu from './submenu'
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero />
    <Sidebar/>
    <Submenu/>
    </main>
  )
}

export default App
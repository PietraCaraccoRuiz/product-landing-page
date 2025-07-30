import React from 'react'
import NavBar from './components/NavBar'
import Hero from './pages/Hero'
import Menu from './components/Menu'
import Banner from './pages/Banner'

const App = () => {
  return (
  <>
    <main className='overflow-x-hidden'>
      <NavBar />
      <Hero />
      <Menu />
      <Banner />
    </main>
  </>
  )
}

export default App
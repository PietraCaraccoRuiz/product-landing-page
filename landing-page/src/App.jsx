import React from 'react'
import NavBar from './components/NavBar'
import Hero from './pages/Hero'
const App = () => {
  return (
  <>
    <main className='overflow-x-hidden'>
      <NavBar />
      <Hero />
    </main>
  </>
  )
}

export default App
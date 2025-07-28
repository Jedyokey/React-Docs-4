import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EscapeHatches from './pages/EscapeHatches'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<EscapeHatches />} />
      
      </Routes>
    
    </>
  )
}

export default App

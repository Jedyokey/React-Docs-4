import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import EscapeHatches from './pages/EscapeHatches'
import Referencing from './pages/Referencing'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<EscapeHatches />} />
        <Route path="/referencing-values-with-refs" element={<Referencing />} />
      </Routes>
    
    </>
  )
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Register from './pages/Register'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App

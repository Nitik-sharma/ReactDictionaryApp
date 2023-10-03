import React from 'react'
import Home from './Pages/Home'
import History from './Pages/History'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='history' element={<History/>}/>
               </Routes>
    </div>
  )
}

export default App

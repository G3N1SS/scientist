import { useState } from 'react'
import MainPage from './MainPage'
import { Route, Routes, Link, useNavigate, Navigate, RouterProvider } from 'react-router-dom';
import Cards from './Cards';

function App() {
  const [count, setCount] = useState(0)

  const baseUrl = '/scientist'

  return (
    <>
    <div className="page">
      <Routes>
        <Route path={baseUrl} element={<MainPage/>}/>
        <Route path='/cards' element={<Cards/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App

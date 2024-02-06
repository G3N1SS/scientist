import { useState } from 'react'
import MainPage from './MainPage'
import { Route, Routes, Link, useNavigate, Navigate, RouterProvider } from 'react-router-dom';
import Cards from './Cards';
import Card from './Card';

function App() {
  const [count, setCount] = useState(0)

  const baseUrl = '/scientist'

  return (
    <>
    <div className="page">
      <Routes>
        <Route path={baseUrl} element={<Navigate to="/" element={<MainPage/>}></Navigate>}/>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/card' element={<Card/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App

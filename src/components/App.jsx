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
        <Route path={baseUrl} element={<MainPage/>}/>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/scientist/cards' element={<Cards/>}/>
        <Route path='/scientist/card' element={<Card/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App

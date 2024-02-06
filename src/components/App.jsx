import { useState } from 'react'
import MainPage from './MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="page">
      <MainPage></MainPage>
    </div>
    </>
  )
}

export default App

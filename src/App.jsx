import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import AddBlog from './components/AddBlog'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/>  */}
      {/* <AddBlog/> */}
      <Navbar/>
      <Routes>
        <Route path="/b" element={<Home/>}/>
        <Route path="/" element={<AddBlog/>}/>
      </Routes>

    </>
  )
}
export default App 
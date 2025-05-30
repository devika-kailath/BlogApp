import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AggBlog from './components/AggBlog'
import ViewBlog from './components/ViewBlog'
import NavBar from './components/NavBar'
import { Route,Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
        <Routes>
          <Route path='/' element = {<AggBlog/>}/>
          <Route path='/a' element = {<ViewBlog/>}/>
        </Routes>

    </>
  )
}

export default App

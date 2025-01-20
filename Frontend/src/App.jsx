import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          </Route>
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
       </Routes>
      </Router>
  )
}

export default App
import Home from '../pages/home'
import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import LoginUser from '../pages/login'
import SignUp from '../pages/signup'

const RouterApp = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:id" element={<Home />}   />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<LoginUser />}/>
        </Routes>
      </Router>
    
    
    
    </>
  )
}

export default RouterApp
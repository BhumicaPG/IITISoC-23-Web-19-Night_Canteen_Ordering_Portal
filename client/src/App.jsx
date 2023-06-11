// import { useState } from 'react'
import "./index.css"
import {Route, Routes} from 'react-router-dom'
// import {Main, Login} from "./containers"

import Login from "./containers/login"
import Main from "./containers/Main"



export default function App() {
  return (
    <div className='w-screen min-h-screen  h-auto flex flex-col items-center justify-center'>
      <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    
  )
}
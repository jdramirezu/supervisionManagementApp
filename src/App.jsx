import React, { useState } from 'react'
import './App.css'
import Login from "./login/Login.jsx"
import Viewport from './viewport/Viewport.jsx';
import Filters from './filters/Filters.jsx';

function App() {

  return (
    <>
      <h1 className='text-slate-100 text-6xl text-center pt-4'>Department Team</h1>
      <Filters />
      {/* <Login /> */}
      <Viewport />
    </>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'
import Login from "./components/Login.jsx"
import Viewport from './components/Viewport.jsx';
import Filters from './components/Filters.jsx';
import Actions from './components/Actions.jsx';

function App() {

  return (
    <>
      <Filters />
      {/* <Login /> */}
      <Viewport />
      <Actions />
    </>
  )
}

export default App

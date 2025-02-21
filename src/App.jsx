import React, { useState } from 'react'
import './App.css'
import Login from "./components/Login.jsx"
import Viewport from './components/Viewport.jsx';
import Filters from './components/Filters.jsx';
import Actions from './components/Actions.jsx';
import NewCandidate from './components/NewCandidate.jsx';
import EmployeeInfo from './components/EmployeeInfo.jsx';

function App() {

  return (
    <>
      {/* <Filters />
      <Login />
      <Viewport />
      <Actions />
      <NewCandidate /> */}
      <EmployeeInfo />
    </>
  )
}

export default App

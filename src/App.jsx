import { useState } from 'react'
import './App.css'
import Login from "./login/Login.jsx"
import StaffList from "./staffList/StaffList.jsx"
import Viewport from './viewport/Viewport.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login /> */}
      <Viewport />
    </>
  )
}

export default App

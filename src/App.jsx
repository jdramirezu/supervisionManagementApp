import React, { useState, useEffect } from 'react'
import './App.css'
import Login from "./components/Login.jsx"
import Viewport from './components/Viewport.jsx';
import Filters from './components/Filters.jsx';
import Actions from './components/Actions.jsx';
import NewCandidate from './components/NewCandidate.jsx';
import EmployeeInfo from './components/EmployeeInfo.jsx';

function App() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});

  useEffect (() =>{
    fetch("/data.json")
    .then(resp => resp.json())
    .then(info => {
      setEmployees(info);
      setEmployee(info[0]);
    })
    .catch(err => console.log("Error fetching employees: ", err));
  },[]);

  return (
    <>
      <Filters />
      {/* <Login /> */}
      <Viewport employees={employees}/>
      <Actions />
      {/* <NewCandidate />
      <EmployeeInfo employee={employee}/> */}
    </>
  )
}

export default App

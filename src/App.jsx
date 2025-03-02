import React, { useState, useEffect } from 'react'
import './App.css'
import Login from "./components/Login.jsx"
import Viewport from './components/Viewport.jsx';
import Filters from './components/Filters.jsx';
import Actions from './components/Actions.jsx';
import NewCandidate from './components/NewCandidate.jsx';
import EmployeeInfo from './components/EmployeeInfo.jsx';
import { EmployeeProvider } from "./contexts/EmployeeContext.jsx"

function App() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});
  const [route, setRoute] = useState("login");

  useEffect (() =>{
    fetch("/data.json")
    .then(resp => resp.json())
    .then(info => {
      setEmployees(info);
    })
    .catch(err => console.log("Error fetching employees: ", err));
  },[]);

  // const onEmployeeClick = (id) => {
  //   const selectedEmpl = employees.filter(emp => emp.id === id);
  //   setEmployee(selectedEmpl[0]);
  // }

  const onRouteChange = (newRoute) =>{
    setRoute(newRoute);
  }

  return (
    <EmployeeProvider>
      {route === "login" ?
        <Login onRouteChange={onRouteChange}/>
      : route === "viewport" ?
        <>
          <Filters />
          <Viewport employees={employees} onRouteChange={onRouteChange}/>
          <Actions onRouteChange={onRouteChange}/>
        </>
        : route === "newCandidate" ?
          <NewCandidate onRouteChange={onRouteChange}/>
        :
          <EmployeeInfo onRouteChange={onRouteChange} />
      }
    </EmployeeProvider>
  )
}

export default App

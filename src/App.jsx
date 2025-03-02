import React from 'react'
import './App.css'
import Login from "./components/Login.jsx"
import Viewport from './components/Viewport.jsx';
import Filters from './components/Filters.jsx';
import Actions from './components/Actions.jsx';
import NewCandidate from './components/NewCandidate.jsx';
import EmployeeInfo from './components/EmployeeInfo.jsx';
import EmployeeEdit from './components/EmployeeEdit.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import { useEmployee } from './contexts/EmployeeContext.jsx';

function App() {
  const {route} = useEmployee();

  return (
    route === "login" ?
      <Login />
    : route === "viewport" ?
      <>
        <Filters />
        <Viewport />
        <Actions />
      </>
      : route === "newCandidate" ?
        <NewCandidate />
      : route === "view" ?
        <EmployeeInfo />
      : route === "edit" ?
        <EmployeeEdit />
      :
        <DeleteConfirmation />
  );
}

export default App

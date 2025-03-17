import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Login.jsx";
import Viewport from './components/Viewport.jsx';
import Filters from './components/Filters.jsx';
import Actions from './components/Actions.jsx';
import NewCandidate from './components/NewCandidate.jsx';
import EmployeeInfo from './components/EmployeeInfo.jsx';
import EmployeeEdit from './components/EmployeeEdit.jsx';
import { useEmployee } from './contexts/EmployeeContext.jsx';

function App() {
  const {selectedEmployee, token} = useEmployee();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employees" element={token ? selectedEmployee ? <EmployeeInfo /> : <><Filters /> <Viewport /> <Actions /></> : <Navigate to="/"/>} />
          <Route path="/NewCandidate" element={token ? <NewCandidate /> : <Navigate to="/" />} />
          <Route path="/edit" element={token ? <EmployeeEdit /> : <Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" /> }/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App

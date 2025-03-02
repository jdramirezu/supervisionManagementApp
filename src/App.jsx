import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login.jsx";
import Viewport from './components/Viewport.jsx';
import Filters from './components/Filters.jsx';
import Actions from './components/Actions.jsx';
import NewCandidate from './components/NewCandidate.jsx';
import EmployeeInfo from './components/EmployeeInfo.jsx';
import EmployeeEdit from './components/EmployeeEdit.jsx';
import { useEmployee } from './contexts/EmployeeContext.jsx';

function App() {
  const {selectedEmployee} = useEmployee();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employees"  element={selectedEmployee ? <EmployeeInfo /> : <><Filters /> <Viewport /> <Actions /></>} />
          <Route path="/NewCandidate" element={<NewCandidate />} />
          <Route path="/edit" element={<EmployeeEdit />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App

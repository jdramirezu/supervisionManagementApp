import {createContext, useContext, useState, useEffect} from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [route, setRoute] = useState("login");

    useEffect (() =>{
        fetch("/data.json")
        .then(resp => resp.json())
        .then(info => {
          setEmployees(info);
        })
        .catch(err => console.log("Error fetching employees: ", err));
    },[]);

    const updateEmployee = (updatedEmpInfo) => {
        setEmployees( oldEmpInfo => {
            oldEmpInfo.map( emp => {
                emp.id === updatedEmpInfo.id ? updatedEmpInfo : emp
            });
        });
        setSelectedEmployee(updatedEmpInfo);
    }

    const onRouteChange = (newRoute) =>{
        setRoute(newRoute);
    }

    const onEmployeeClick = employee => {
        setSelectedEmployee(employee);
    }

    return (
        <EmployeeContext.Provider value={{selectedEmployee, onEmployeeClick, route, onRouteChange, employees, setSelectedEmployee, updateEmployee}}>
            {children}
        </EmployeeContext.Provider>
    );
}

export const useEmployee = () => useContext(EmployeeContext);
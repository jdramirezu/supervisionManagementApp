import {createContext, useContext, useState} from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const onEmployeeClick = employee => {
        setSelectedEmployee(employee);
    }

    return (
        <EmployeeContext.Provider value={{selectedEmployee, onEmployeeClick}}>
            {children}
        </EmployeeContext.Provider>
    );
}

export const useEmployee = () => useContext(EmployeeContext);
import {createContext, useContext, useState, useEffect} from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [newCandidateData, setNewCandidateData] = useState({
        id: '15',
        fullName: "",
        preferredName: "",
        email: "",
        employeeID: "",
        phoneNumber: "",
        status: "",
        area: "",
        contractType: "",
        stage: "",
        availability: "",
        comments: ""
    })

    useEffect (() =>{
        fetch("http://localhost:3000/profiles")
        .then(resp => resp.json())
        .then(info => {
          setEmployees(info);
        })
        .catch(err => console.log("Error fetching employees in front: ", err));
    },[]);

    const updateEmployee = (updatedEmpInfo) => {
        setEmployees( oldEmpInfo => {
            oldEmpInfo.map( emp => {
                emp.id === updatedEmpInfo.id ? updatedEmpInfo : emp
            });
        });
        setSelectedEmployee(updatedEmpInfo);
    }

    const onEmployeeClick = employee => {
        if(!employee){
            setSelectedEmployee(null);
        } else{
            fetch(`http://localhost:3000/profile/${employee.id}`)
            .then(resp => resp.json())
            .then(data =>{
                setSelectedEmployee(data);
            })
        }
    }

    const onEmailChange = event =>{
        setLoginEmail(event.target.value);
    }

    const onPasswordChange = event =>{
        setLoginPassword(event.target.value);
    }

    const onLoginSubmit = (navigate) =>{
        fetch("http://localhost:3000/login",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: loginEmail,
                password: loginPassword
            })
        })
        .then(resp => resp.json())
        .then(data =>{
            if(data === "success"){
                navigate("/employees");
            } 
        })
    }

    const onCandidateSave = (navigate, newCandidateData) =>{
        fetch("http://localhost:3000/newCandidate",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCandidateData)
        })
        .then(resp => resp.json())
        .then(data =>{
            console.log(data);
            navigate("/employees");
        
        })
    }

    const onDataChange = (event) =>{
        setNewCandidateData({
            ...newCandidateData, [event.target.name]:event.target.value
        });
    }

    return (
        <EmployeeContext.Provider value={
            {
                selectedEmployee,
                onEmployeeClick,
                employees,
                setSelectedEmployee,
                updateEmployee,
                onEmailChange,
                onPasswordChange,
                onLoginSubmit,
                onCandidateSave,
                onDataChange,
                newCandidateData
            }}>
            {children}
        </EmployeeContext.Provider>
    );
}

export const useEmployee = () => useContext(EmployeeContext);
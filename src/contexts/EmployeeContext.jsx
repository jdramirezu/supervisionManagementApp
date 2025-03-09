import {createContext, useContext, useState, useEffect} from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [searchField, setSearchField] = useState('');
    // const [area, setArea] = useState("");
    const [newCandidateData, setNewCandidateData] = useState({
        fullname: "",
        preferredname: "",
        email: "",
        employerid: "",
        phonenumber: "",
        status: "",
        workarea: "",
        contracttype: "",
        stage: "",
        availability: "",
        observations: ""
    });
    const areas = [{
        id: 0,
        name: "Whole Department",
    },
    {
        id: 1,
        name: "Area1",
    },
    {
        id: 2,
        name: "Area2",
    },
    {
        id:3,
        name:"Area3"
    }];

    useEffect (() =>{
        fetch("http://localhost:3000/profiles")
        .then(resp => resp.json())
        .then(info => {
          setEmployees(info);
        })
        .catch(err => console.log("Error fetching employees in front: ", err));
    },[refresh]);

    const onSearchInfo = event =>{
        setSearchField(event.target.value);
    }

    const filteredStaffByName = employees.filter(employee =>{
        return employee.fullname.toLowerCase().includes(searchField.toLowerCase());
    });
    
    // const filteredStaffByArea = employees.filter(areaEmployees =>{
    //     return areaEmployees.workarea.includes(area);
    // });
    
    const updateEmployee = (updatedEmpInfo) => {
        fetch(`http://localhost:3000/profile/${updatedEmpInfo.id}`,{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedEmpInfo)
        }).then( resp =>{
            setRefresh(prev => !prev);
            resp.json();
        })
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
            if(data != "success"){
                throw new Error ("WRONG CREDENTIALS");
            }
            navigate("/employees");

            // if(data === "success"){
            //     navigate("/employees");
            // } 
        }).catch(err =>{
            setErrorMessage(err.message);
        })
    }

    const onCandidateSave = (navigate, newCandidateData) =>{
        fetch("http://localhost:3000/newCandidate",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCandidateData)
        })
        .then(resp => {
            setRefresh(prev => !prev);
            resp.json();
            navigate("/employees");
        })
    }

    const onDataChange = (event) =>{
        const {multiple, selectedOptions}=event.target;

        if(multiple){
            const values = Array.from(selectedOptions, option => option.value);
            setNewCandidateData({
                ...newCandidateData,[event.target.name]:values
            });
        } else{
            setNewCandidateData({
                ...newCandidateData, [event.target.name]:event.target.value
            });
        }
    }

    const deleteEmployee = employee =>{
        fetch(`http://localhost:3000/profile/${employee.id}`,{
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee)
        }).then( resp =>{
            setRefresh(prev => !prev);
            resp.json();
        })
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
                newCandidateData,
                deleteEmployee,
                errorMessage,
                onSearchInfo,
                filteredStaffByName,
                areas
            }}>
            {children}
        </EmployeeContext.Provider>
    );
}

export const useEmployee = () => useContext(EmployeeContext);
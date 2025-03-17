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
    const [newCandidateData, setNewCandidateData] = useState({
        fullname: "",
        preferredname: "",
        email: "",
        employerid: "",
        phonenumber: "",
        status: "",
        workarea: "",
        contracttype: "",
        picture: null,
        CV: null,
        availability: "",
        stage: "",
        observations: ""
    });
    const [area, setArea] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [userRole, setUserRole] = useState(null);
    const [picture, setPicture] = useState(null);
    const [cv, setCV] = useState(null);

    useEffect (() =>{
        if(token){
            fetch("http://localhost:3000/profiles", {
                headers: {"Authorization": `Bearer ${token}`}
            })
            .then(resp => resp.json())
            .then(info => {
            setEmployees(info);
            })
            .catch(err => console.log("Error fetching employees in front: ", err));

            console.log("refresh",refresh);
            console.log("userRole",userRole);
        }
    },[refresh, token, userRole]);

    const onSearchInfo = event =>{
        setSearchField(event.target.value);
    }

    const onAreaChange = event =>{
        setArea(event);
    }

    const filteredStaff = employees.filter(employee =>{
        const filteredNames = employee.fullname.toLowerCase().includes(searchField.toLowerCase());
        const filteredArea = area === "" || employee.workarea === area;

        return filteredNames && filteredArea;
    });
    
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
            if(!data.token){
                throw new Error ("WRONG CREDENTIALS");
            } else {
                localStorage.setItem("token", data.token);
                setToken(data.token);
                
                const decoded = JSON.parse(atob(data.token.split(".")[1]));
                setUserRole(decoded.role);
                

            }
            navigate("/employees");

        }).catch(err =>{
            setErrorMessage(err.message);
        })
    }

    const onExit = () =>{
        localStorage.removeItem("token");
        setToken(null);
        setUserRole(null);
    }

    const onCandidateSave = (navigate, newCandidateData) =>{
        const myFormData = new FormData();

        Object.keys(newCandidateData).forEach(key =>{
            if (key === "availability"){
                myFormData.append(key, JSON.stringify(newCandidateData.availability));
            } else {
                myFormData.append(key, newCandidateData[key]);
            }
        });

        fetch("http://localhost:3000/newCandidate",{
            method: 'post',
            // headers: {'Content-Type': 'application/json'},
            // body: JSON.stringify(newCandidateData)
            body: myFormData
        })
        .then(resp => {
            setRefresh(prev => !prev);
            resp.json();
            navigate("/employees");
        }).catch( err => console.log("Upload error:", err) );
    }

    const onDataChange = (event) =>{ // added a new condition to handle files
        const {multiple, selectedOptions, id}=event.target;

        if(multiple){
            const values = Array.from(selectedOptions, option => option.value);
            setNewCandidateData({
                ...newCandidateData,[event.target.name]:values
            });
        } else if(id === 'picture' || id === 'CV'){
            setNewCandidateData({
                ...newCandidateData, [event.target.name]: event.target.files[0]
            });
        } else {
            setNewCandidateData({
                ...newCandidateData, [event.target.name]:event.target.value
            });
        }
    }

    const deleteEmployee = employee =>{
        if(userRole === "admin"){
            fetch(`http://localhost:3000/profile/${employee.id}`,{
                method: 'delete',
                headers: {'Authorization': `Bearer ${token}`},
                body: JSON.stringify(employee)
            }).then( resp =>{
                setRefresh(prev => !prev);
                resp.json();
            }).catch(err => {
                setErrorMessage(err.message);
            })
        }
    }

    return (
        <EmployeeContext.Provider value={
            {
                selectedEmployee,
                employees,
                newCandidateData,
                errorMessage,
                filteredStaff,
                area,
                token,
                userRole,
                onEmployeeClick,
                setSelectedEmployee,
                updateEmployee,
                onEmailChange,
                onPasswordChange,
                onLoginSubmit,
                onCandidateSave,
                onDataChange,
                deleteEmployee,
                onSearchInfo,
                onAreaChange,
                onExit,
                setCV,
                setPicture
            }}>
            {children}
        </EmployeeContext.Provider>
    );
}

export const useEmployee = () => useContext(EmployeeContext);
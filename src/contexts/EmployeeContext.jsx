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
    const initialState = {
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
    }
    const [newCandidateData, setNewCandidateData] = useState(initialState);
    const [area, setArea] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [userRole, setUserRole] = useState(null);

    useEffect (() =>{
        if(token){                
            const decoded = JSON.parse(atob(token.split(".")[1]));
            setUserRole(decoded.role);

            fetch(`${import.meta.env.VITE_API_BASE_URL}/profiles`, {
                headers: {"Authorization": `Bearer ${token}`}
            })
            .then(resp => resp.json())
            .then(info => {
            setEmployees(info);
            })
            .catch(err => console.log("Error fetching employees in front: ", err));

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
        const myFormData = new FormData();

        Object.keys(updatedEmpInfo).forEach((key, value) =>{
            if(value !== "" && value !== null){
                if (key === "availability"){
                    myFormData.append(key, JSON.stringify(updatedEmpInfo.availability));
                } else if(updatedEmpInfo[key]){
                    myFormData.append(key, updatedEmpInfo[key]);
                }
            }
            
        });

        fetch(`${import.meta.env.VITE_API_BASE_URL}/profile/${updatedEmpInfo.id}`,{
            method: 'put',
            body: myFormData
        })
        .then(resp => {
            setRefresh(prev => !prev);
            resp.json();
        }).catch( err => console.log("Upload error:", err) );

    }

    const onEmployeeClick = employee => {

        if(!employee){
            setSelectedEmployee(null);
        } else{
            fetch(`${import.meta.env.VITE_API_BASE_URL}/profile/${employee.id}`)
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
        fetch(`${import.meta.env.VITE_API_BASE_URL}/login`,{
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

        fetch(`${import.meta.env.VITE_API_BASE_URL}/newCandidate`,{
            method: 'post',
            body: myFormData
        })
        .then(resp => {
            setRefresh(prev => !prev);
            resp.json();
            navigate("/employees");
            setNewCandidateData(initialState);
        }).catch( err => console.log("Upload error:", err) );
    }

    const onDataChange = (event) =>{
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
        if(userRole === "Admin"){
            fetch(`${import.meta.env.VITE_API_BASE_URL}/profile/${employee.id}`,{
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
                onExit
            }}>
            {children}
        </EmployeeContext.Provider>
    );
}

export const useEmployee = () => useContext(EmployeeContext);
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const soloUser = ({fullname, preferredName, email, employeeID, phoneNumber, status, area, contractType, stage, availability, comments}) => {
    const user = {
        id: '15',
        fullName: fullname,
        preferredName: preferredName,
        email: email,
        employeeID: employeeID,
        phoneNumber: phoneNumber,
        status: status,
        area: area,
        contractType: contractType,
        stage: stage,
        availability: availability,
        comments: comments
    }
    return user;
}

const usersDB = [
    {
        id: '1',
        name: "John Doe",
        email: "jd@email.com",
        role: "admin",
        password: "cookies"
    },
    {
        id: '2',
        name: "Steven Green",
        email: "sg@email.com",
        role: "viewer",
        password: "bananas"
    }
];

app.get('/', (req,res) =>{
    res.send("getting root");
});

app.post("/login",(req,res) =>{
    if(req.body.email === usersDB[0].email &&
        req.body.password === usersDB[0].password){
            res.json("logging in");
    } else {
        res.status(400).json("Log in failed");
    }
});

app.get("/profiles", (req, res) =>{
    res.json(usersDB);
});

app.post("/newCandidate", (req,res) =>{
    const newUser = soloUser(req.body);
    usersDB.push(newUser);
    res.json(usersDB);
})

app.get("/profile/:id", (req, res) =>{
    const { id } = req.params;
    let found = false;
    usersDB.forEach(user => {
        if (user.id === id){
            found = true;
            return res.json(user);
        }
    }) 
        
    if (!found) {
        res.status(404).json("User not found");
    }
});

app.put('/profile/:id', (req,res) =>{
    const {id} = req.params;
    const userMod = soloUser(req.body);
    let found = false;
    usersDB.forEach((user,i) =>{
        if(user.id === id){
            found = true;
            usersDB[i] = userMod;
            return res.json(usersDB);
        }
    });
    if (!found){
        res.status(404).json("User not modified");
    }
});

app.delete('/profile/:id', (req,res) =>{
    const {id} = req.params;
    let found = false;
    usersDB.forEach((user,i) =>{
        if (user.id === id){
            found = true;
            usersDB.splice(i,1);
            return res.json(usersDB);
        }
    });
    if (!found){
        res.status(404).json("doesn't exist");
    }
});

app.listen(3000, () =>{
    console.log("app running on port 3000");
});

/*
/ --> res = getting root    ----- DONE -----
/login --> POST = success/fail  ----- DONE -----
/profiles --> GET = returns profiles with limited actions based on user role    ----- DONE -----
/newCandidate --> POST = creates new candidate  ----- DONE -----
/profile/:id --> GET = returns a specific candidate ----- DONE -----
/profile/:id --> PUT = modifies the selected profile    ----- DONE -----
/profile/:id -- DELETE = deletes the selected profile
*/
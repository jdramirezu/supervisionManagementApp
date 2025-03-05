const express = require('express');
const bcrypt = require('bcrypt');
const cors  = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

const soloUser = ({fullName, preferredName, email, employeeID, phoneNumber, status, area, contractType, stage, availability, comments}) => {
    const user = {
        id: '15',
        fullName: fullName,
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

const infoLocation = path.join(__dirname, "../public/data.json");

const usersDB = [
    {
        id: '1',
        name: "John Doe",
        email: "jd@email.com",
        role: "admin",
        hash: "$2b$10$T1OhMTWI6ADADgiZER9hRuKWUec5Iy.Uti9aQGJL6sHvgNcOlkhxS"
    },
    {
        id: '2',
        name: "Steven Green",
        email: "sg@email.com",
        role: "viewer",
        hash: "$2b$10$626rKyY7aKCWezgOQ2lwqeOv0mhI8xcVjPV4CpqZp3INKUoZCnz1y"
    }
];

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send(usersDB);
});

app.post("/login",(req,res) =>{
    if(req.body.email === usersDB[0].email && (bcrypt.compareSync(req.body.password, usersDB[0].hash))
    ){
        res.json("success");
    } else {
        res.status(400).json("Log in failed");
    }
});

app.get("/profiles", (req, res) =>{

    fs.readFile(infoLocation, "utf8", (err,data)=>{
        if(err){
            res.status(500).json("Internal error in server: ",err);
        }
        const employees = JSON.parse(data);
        res.json(employees);
    })
});

app.post("/newCandidate", (req,res) =>{
    const newUser = soloUser(req.body);
    usersDB.push(newUser);
    res.json(usersDB);
})

app.get("/profile/:id", (req, res) =>{
    const { id } = req.params;
    fs.readFile(infoLocation, "utf8", (err,data)=>{
        if (err){
            res.status(500).json("Internal error in server: ",err);
        }

        const staff = JSON.parse(data);
        staff.forEach(user => {
            if (user.id == id){
                return res.json(user);
            }
        })
    })
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

const express = require('express');
const bcrypt = require('bcrypt');
const cors  = require('cors');
const knex = require('knex');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

const smaDB = knex({
    client: 'pg',
    connection: {
        host: "127.0.0.1",
        user: "postgres",
        password: process.env.JWT_DBPASSWORD, //Change to environment variable
        database: "supervisionManagementApp"
    }
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send(usersDB);
});

app.post("/login",(req,res) =>{
    const {email, password} = req.body;
    smaDB.select('*').from('users').where({email})
    .then(data =>{
        if(bcrypt.compareSync(password, data[0].passwordhash)){
            
            const payload = {id: data[0].id, role: data[0].role}
            const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});

            // res.json("success");
            res.json({token, role:data[0].role});
        } else {
            res.status(401).json("Invalid credentials");
        }
    }).catch(err =>{
        res.status(500).json({err: "Server error"})
    });
});

app.get("/profiles", (req, res) =>{
    smaDB.select("*").from("staff").orderBy('id', 'asc').then(data =>{
        res.json(data);
    });
});

app.post("/newCandidate", (req,res) =>{
    const {fullname, preferredname, email, employerid, phonenumber, status, workarea, contracttype, stage, availability, observations} = req.body;
    
    smaDB("staff").insert({
        fullname: fullname,
        preferredname: preferredname,
        email: email,
        employerid: employerid,
        phonenumber: phonenumber,
        status: status,
        workarea: workarea,
        contracttype: contracttype,
        stage: stage,
        availability: availability,
        observations: observations
    }).then(data => res.json(data));
})

app.get("/profile/:id", (req, res) =>{
    const { id } = req.params;
    smaDB.select("*").from("staff").where({id}).then(data =>{
        res.json(data[0]);
    });
});

app.put('/profile/:id', (req,res) =>{
    const { id } = req.params;
    const {fullname, preferredname, email, employerid, phonenumber, status, area, contracttype, stage, availability, observations} = req.body;
    
    smaDB.from('staff').where({id}).update({
        fullname: fullname,
        preferredname: preferredname,
        email: email,
        employerid: employerid,
        phonenumber: phonenumber,
        status: status,
        workarea: area,
        contracttype: contracttype,
        stage: stage,
        availability: availability,
        observations: observations
    }).then(data => res.json(data));
});

app.delete('/profile/:id', (req,res) =>{
    const {id} = req.params;

    smaDB.from('staff').where({id}).del()
    .then(response => res.json(response));

});

app.listen(3000, () =>{
    console.log("app running on port 3000");
});

const express = require('express');
const bcrypt = require('bcrypt');
const cors  = require('cors');
const knex = require('knex');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const path = require("path");

const app = express();

const smaDB = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {rejectUnauthorized: false}
    }
})

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder: "candidate_files",
        allowed_formats: ['jpg', 'jpeg', 'png', 'pdf']
    }
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// });

// const fileFilter = (req, file, cb) =>{
//     const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
//     if(allowedTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(new Error("Invalid file type."), false);
//     }
// }

const upload = multer({storage});

app.get('/', (req,res) => {
    res.send("Getting root");
});

app.post("/login",(req,res) =>{
    const {email, password} = req.body;
    smaDB.select('*').from('users').where({email})
    .then(data =>{
        if(bcrypt.compareSync(password, data[0].passwordhash)){
            
            const payload = {id: data[0].id, role: data[0].role}
            const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});

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

app.post("/newCandidate", upload.fields([{ name: "picture"}, {name: "CV"}]), async (req,res) =>{
    const {fullname, preferredname, email, employerid, phonenumber, status, workarea, contracttype, stage, observations} = req.body;
    const picturePath = req.files["picture"] ? req.files["picture"][0].path : null;
    const cvPath = req.files["CV"] ? req.files["CV"][0].path : null;
    const availability = JSON.parse(req.body.availability || []);

    smaDB("staff").insert({
        fullname: fullname,
        preferredname: preferredname,
        email: email,
        employerid: employerid,
        phonenumber: phonenumber,
        status: status,
        workarea: workarea,
        contracttype: contracttype,
        picture: picturePath,
        CV: cvPath,
        availability: availability,
        stage: stage,
        observations: observations
    }).then(data => res.json(data))
    .catch( err => res.status(500).json(err));
})

app.get("/profile/:id", (req, res) =>{
    const { id } = req.params;
    smaDB.select("*").from("staff").where({id}).then(data =>{
        res.json(data[0]);
    });
});

app.put('/profile/:id', upload.fields([{ name: "picture"}, {name: "CV"}]), (req,res) =>{
    const { id } = req.params;
    const updatedFields = req.body;
    updatedFields["availability"] = JSON.parse(req.body.availability);

    if(req.files["picture"]){
        updatedFields.picture = req.files["picture"][0].path;
    }
    if (req.files["CV"]){
        updatedFields.CV = req.files["CV"][0].path;
    }

    smaDB.from('staff').where({id}).update(updatedFields)
    .then(data => res.json(data));
});

app.delete('/profile/:id', (req,res) =>{
    const {id} = req.params;

    smaDB.from('staff').where({id}).del()
    .then(response => res.json(response));

});

app.listen(3000, () =>{
    console.log("app running on port 3000");
});

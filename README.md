# Supervision Management App

## 📌 Project Description

The Supervision Management App is a full-stack web application designed to manage and track employees and candidates throughout the hiring and employment process. It includes role-based authentication, file uploads (CVs and profile pictures), and a filtering system for efficient data management.

## 🌐 Live Demo

Go to the following link and use these credentials to view the live app:

https://supervision-management-app.vercel.app/

Email: viewer@example.com
Password: bananas

Keep in mind that these credentials will give you access only as a viewer, so editing options are not available. For admin credentials, please contact me or install the app locally.

##🛠 Tech Stack

Frontend: React (Vite), Tailwind CSS

Backend: Node.js, Express.js

Database: PostgreSQL

Authentication: bcrypt

File Storage: Cloudinary

Deployment: Vercel (Frontend), Render (Backend), Neon (Database)

## 🚀 Features

🏢 Role-Based Authentication: Admin and Viewer roles

📄 File Uploads: Profile pictures and CVs stored in Cloudinary

🔎 Search & Filters: Find employees quickly by name or work area

📝 Profile Management: Create, edit, and delete employee records (Admin only)

✅ Candidate Tracking: Manage candidates before assigning an employee ID

## 🏗 Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

git clone https://github.com/jdramirezu/supervisionManagementApp.git
cd supervision-management-frontend

### 2️⃣ Install dependencies
(Needs to be run in project and server folders)

npm install

### 3️⃣ Set up environment variables

Create a .env file in the backend directory and add the following variables:

JWT_SECRET=your_secre_key
JWT_EXPIRATION=how_long_the_session_will last
JWT_DBPASSWORD=password_for_your_db
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

### 4️⃣ Run the app

#### Start the backend server
npm start

#### Start the frontend
npm run dev

## 📡 API Documentation

### 🔹 Authentication Routes

POST /login - Authenticate user

POST /newCandidate - Register new user (Admin only)

### 🔹 Profile Management

GET /profiles - Get list of all candidates

GET /profile/:id - Get employee profile

PUT /profile/:id - Update employee profile (Admin only)

DELETE /profile/:id - Delete profile (Admin only)

## 📸 Screenshots / Video (Coming soon)



## 🤝 Contributing

Pull requests are welcome! If you find an issue, feel free to open one.

## 📜 License

This project is licensed under the MIT License.

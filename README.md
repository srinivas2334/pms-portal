
# 🎓✨ College Placement Management System 🚀💼

> **Empowering Colleges with a Smarter Placement Process**

---

## 📚 Table of Contents

* 🔰 [Introduction](#introduction)
* 🌟 [Features](#features)
* 🛠️ [Tech Stack](#tech-stack)
* 🗂️ [Project Structure](#project-structure)
* 👥 [User Roles](#user-roles)
* ⚙️ [Installation Guide](#installation)
* 🙌 [Contributors](#contributors)

---

## 🔰 Introduction

🎓 The **College Placement Management System** is a full-fledged MERN web application tailored to **digitize, simplify, and optimize** the college placement process.
🛠️ Built with love by final-year students of **Rizvi College of Engineering**, this platform connects students, TPOs, management, and super admins under a unified system to ensure efficient, paperless placement cycles.

---

## 🌟 Features

✅ **Student Portal**
🎓 Register | 📝 Edit Profile | 📄 Upload Resume | 💼 View Jobs | 📩 Apply | 📊 Track Status

✅ **TPO Admin Portal**
🧑‍💼 Post Jobs | 🧾 Manage Applications | 🗓️ Schedule Interviews | 📄 Upload Offer Letters

✅ **Management Admin Portal**
📈 Monitor Stats | 📊 Access Reports | 🔍 Analyze Placement Performance

✅ **Super Admin Portal**
🛡️ System Configuration | 👥 Manage TPOs & Management Users | 🌐 Control Access

✅ **Cloudinary Integration**
☁️ Seamless Uploads for:

* Profile Pictures
* Resumes
* Offer Letters

---

## 🛠️ Tech Stack

**Frontend 🧑‍🎨**
⚡ Vite + React.js
🎨 Tailwind CSS + Bootstrap

**Backend 🔧**
🧠 Node.js + Express.js
🗄️ MongoDB

**Other Tools**
🔐 JWT Authentication
☁️ Cloudinary (File Storage)
📬 Nodemailer (Email Support)

---

## 🗂️ Project Structure

```plaintext
📦 college-placement-management-system
├── 🖥️ frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── LandingPages/
│   │   │   └── students/
│   │   ├── config/        🔧 backend_url.js
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── utility/
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
├── 🧠 backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env 🌱 (You need to create this)
│   └── index.js
```

---

## 👥 User Roles

| Role            | Permissions                                                               |
| --------------- | ------------------------------------------------------------------------- |
| 👨‍🎓 Student   | View & Apply Jobs, Update Profile, Track Status, Upload Resume            |
| 🧑‍💼 TPO Admin | Post Jobs, Manage Applications, Upload Offer Letters, Schedule Interviews |
| 🏢 Management   | Access Reports, View Statistics, Monitor Placement Progress               |
| 👑 Super Admin  | Full Access, Manage Users, System Settings                                |

---

## ⚙️ Installation

### 🔧 Prerequisites

* ✅ Node.js & npm
* ✅ MongoDB (Installed and Running)
* ✅ Cloudinary Account

---

### 📥 Clone the Repository

```bash
git clone https://github.com/moinmn/college-placement-management-system.git
cd college-placement-management-system
```

---

### 🔙 Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add:

```env
PORT=4518
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
SMTP_USER=your_email
SMTP_PASS=your_app_password
```

4. Run the backend:

```bash
npm start
```

---

### 🖥️ Frontend Setup

1. Navigate to the frontend folder:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Update API Base URL for development:
   Open `src/config/backend_url.js` and set:

```js
export const BASE_URL = 'http://localhost:4518';
```

4. Start the frontend:

```bash
npm run dev
```

---

## 🙌 Contributors

👩‍💻 Developed by srinivas
💡 Designed for efficient, transparent & digital placements.

---

## 💫 Final Words

📢 Whether you're a student looking for your dream job or a TPO managing hundreds of candidates, **this platform is built for you**.
✨ It's time to embrace the future of placements — **fully digital, highly efficient, and beautifully simple**.

 

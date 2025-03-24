# MERN Blog Platform

## Overview
The **MERN Blog Platform** is a full-stack web application that allows users to create, edit, and publish blog posts. This project is designed to demonstrate best practices in **DevOps**, including version control, CI/CD pipelines, deployment, monitoring, and security considerations.

## Features
- User-friendly blog creation and management.
- Responsive frontend built with **React**.
- Backend powered by **Express.js** and **MongoDB**.
- Automated testing and CI/CD pipelines using **GitHub Actions**.
- Deployed on **Render (Backend)** and **Vercel (Frontend)**.
- Monitoring and logging integration.

---

## Tech Stack

### **Frontend**
- React (Vite for fast development)
- CSS (Minimal styling)
- Deployed on **Vercel**

### **Backend**
- Node.js with Express.js
- MongoDB with Mongoose (Database ORM)
- Deployed on **Render**

### **DevOps Tools**
- **GitHub Actions** (CI/CD automation)
- **PM2** (Process management for the backend)
- **Render Logs & Dashboard** (Monitoring)
- **Sentry** (Frontend error tracking)
- **Winston & Morgan** (Backend logging)

---

## Project Setup

### **1. Clone the Repository**
```bash
  git clone https://github.com/yourusername/mern-blog-platform.git
  cd mern-blog-platform
```

### **2. Setup Backend**
```bash
  cd backend
  npm install
  touch .env   # Add environment variables
  npm start
```
#### **Backend Environment Variables (`.env`)**
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### **3. Setup Frontend**
```bash
  cd frontend
  npm install
  npm run dev  # Runs on http://localhost:5173
```

---

## Deployment

### **1. Deploy Backend to Render**
- Push code to GitHub.
- Create a new **Render Web Service**.
- Connect the repo and set environment variables.
- Deploy using the **Deploy Hook** (configured in GitHub Actions).

### **2. Deploy Frontend to Vercel**
- Install Vercel CLI: `npm install -g vercel`
- Login: `vercel login`
- Deploy: `vercel --prod`

---

## **CI/CD Pipelines**
This project includes GitHub Actions workflows for:
1. **Backend CI (`.github/workflows/backend-ci.yml`)**
   - Installs dependencies and runs tests.
2. **Frontend CI (`.github/workflows/frontend-ci.yml`)**
   - Ensures frontend builds successfully.
3. **Backend Deployment (`.github/workflows/backend-deploy.yml`)**
   - Automatically deploys backend to **Render**.
4. **Frontend Deployment (`.github/workflows/frontend-deploy.yml`)**
   - Deploys frontend to **Vercel**.

---

## **Monitoring & Security**
- **Logging**: Winston & Morgan for backend logs.
- **Error Tracking**: Sentry for frontend crash reports.
- **Environment Variables**: Stored securely in **GitHub Secrets**.
- **HTTPS**: Ensured via **Vercel** and **Render**.

---

## **Contributing**
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Added new feature"`).
4. Push to GitHub (`git push origin feature-name`).
5. Submit a pull request.

---

## **License**
This project is licensed under the **MIT License**.


# 🏙️ Civic Connect (Under Progress)

> **Empowering citizens to build cleaner, smarter cities through technology and community collaboration.**

Civic Connect is a modern, responsive web application that bridges the gap between citizens and civic bodies by simplifying how local issues are reported and resolved. Built with React and featuring stunning UI animations, secure authentication, and an intuitive user experience.

![Civic Connect Hero](./docs/screenshots/hero-section.png)
*Beautiful hero section with custom cursor effects and smooth animations*

## ✨ Features

### 🔐 **Authentication System**
- **Secure User Registration** with email validation and password strength indicators
- **JWT-based Login/Logout** with persistent sessions
- **Protected Routes** that require authentication
- **Password Security** with bcrypt hashing (12 salt rounds)
- **Real-time Form Validation** with user-friendly error messages

### 🎨 **Interactive UI/UX**
- **Custom Animated Cursor** with soft glow effects and magnetic hover interactions
- **Smooth Scroll Animations** that fade in and slide up elements as they enter the viewport
- **Dark/Light Mode Toggle** with seamless transitions
- **Responsive Design** optimized for all devices (desktop, tablet, mobile)
- **Accessibility Features** including reduced motion support and high contrast mode

### 📊 **Dashboard Features**
- **User Profile Management** with engagement statistics
- **Activity Tracking** showing reported issues and community impact
- **Quick Action Buttons** for reporting issues and browsing maps
- **Civic Engagement Metrics** including points and resolved issues

### 🎯 **Additional Features**
- **Mobile-First Design** with touch-friendly interactions
- **Progressive Enhancement** with graceful fallbacks
- **Loading States** and error handling throughout the app
- **SEO Optimized** with proper meta tags and semantic HTML

## 🚀 Live Demo

🔗 **[View Live Demo](https://your-demo-link.vercel.app)** *(Replace with your actual deployment URL)*

![Dashboard Preview](./docs/screenshots/dashboard.png)
*User dashboard with engagement statistics and quick actions*

## 🛠️ Tech Stack

### **Frontend**
- ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react) **React** - UI library with hooks and context
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.11-38B2AC?style=flat&logo=tailwind-css) **Tailwind CSS** - Utility-first styling
- ![React Router](https://img.shields.io/badge/React%20Router-6.20.1-CA4245?style=flat&logo=react-router) **React Router DOM** - Client-side routing
- ![AOS](https://img.shields.io/badge/AOS-2.3.4-00D8FF?style=flat) **AOS (Animate On Scroll)** - Scroll animations
- ![Axios](https://img.shields.io/badge/Axios-1.6.2-5A29E4?style=flat&logo=axios) **Axios** - HTTP client for API requests

### **Backend**
- ![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=flat&logo=node.js) **Node.js** - Runtime environment
- ![Express](https://img.shields.io/badge/Express-4.18.2-000000?style=flat&logo=express) **Express.js** - Web application framework
- ![MongoDB](https://img.shields.io/badge/MongoDB-8.0.3-47A248?style=flat&logo=mongodb) **MongoDB** with Mongoose ODM
- ![JWT](https://img.shields.io/badge/JWT-9.0.2-000000?style=flat&logo=jsonwebtokens) **JSON Web Tokens** - Authentication
- ![bcrypt](https://img.shields.io/badge/bcrypt-2.4.3-3178C6?style=flat) **bcryptjs** - Password hashing

### **Development Tools**
- ![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=flat&logo=vite) **Vite** - Build tool and dev server
- ![ESLint](https://img.shields.io/badge/ESLint-9.29.0-4B32C3?style=flat&logo=eslint) **ESLint** - Code linting
- ![Concurrently](https://img.shields.io/badge/Concurrently-8.2.2-5C6BC0?style=flat) **Concurrently** - Run multiple scripts

## 📁 Project Structure

```
civic-connect/
├── 📁 public/
│   ├── civic-icon.png          # App icon
│   └── vite.svg               # Vite logo
├── 📁 server/
│   └── server.js              # Express server with API routes
├── 📁 src/
│   ├── 📁 components/
│   │   ├── AuthModal.jsx      # Authentication modal
│   │   ├── CustomCursor.jsx   # Animated cursor component
│   │   ├── Dashboard.jsx      # Protected dashboard
│   │   ├── Login.jsx          # Login form
│   │   └── Register.jsx       # Registration form
│   ├── 📁 contexts/
│   │   └── AuthContext.jsx    # Authentication state management
│   ├── App.jsx                # Main app component
│   ├── App.css                # Custom styles and animations
│   ├── index.css              # Global styles
│   └── main.jsx               # App entry point
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

## ⚡ Installation & Setup

### **Prerequisites**
Before you begin, ensure you have the following installed:
- ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js) **Node.js** (v18 or higher)
- ![npm](https://img.shields.io/badge/npm-9+-CB3837?style=flat&logo=npm) **npm** (v9 or higher)
- ![MongoDB](https://img.shields.io/badge/MongoDB-6+-47A248?style=flat&logo=mongodb) **MongoDB** (local or cloud instance)

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/yourusername/civic-connect.git
cd civic-connect
```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Environment Configuration**
Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-environment-12345

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/CivicConnect

# Client Configuration
VITE_API_URL=http://localhost:3001/api
```

> ⚠️ **Security Note**: Change the `JWT_SECRET` to a strong, unique secret in production!

### **Step 4: Database Setup**

#### **Local MongoDB Installation:**

**macOS (using Homebrew):**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb/brew/mongodb-community
```

**Windows:**
1. Download MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Follow the installation wizard
3. Start MongoDB service from Services app

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

#### **MongoDB Cloud (Alternative):**
If you prefer using MongoDB Atlas:
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in your `.env` file

## 🚀 Running the Application

### **Option 1: Start Both Frontend & Backend (Recommended)**
```bash
npm run dev:full
```

### **Option 2: Start Separately**

**Terminal 1 (Backend Server):**
```bash
npm run dev:server
```

**Terminal 2 (Frontend):**
```bash
npm run dev
```

### **Access the Application**
- 🌐 **Frontend**: http://localhost:5173
- 🔧 **Backend API**: http://localhost:3001/api

![Authentication Flow](./docs/screenshots/auth-flow.gif)
*Smooth authentication flow with form validation*

## 📖 Usage Guide

### **1. User Registration**
1. Click the **"Sign Up"** button in the navigation
2. Fill out the registration form:
   - Enter a valid email address
   - Create a strong password (minimum 6 characters with uppercase, lowercase, and numbers)
   - Confirm your password
3. Click **"Create Account"**
4. You'll be automatically logged in and redirected to the dashboard

### **2. User Login**
1. Click the **"Login"** button in the navigation
2. Enter your credentials
3. Click **"Sign In"**
4. Access your personalized dashboard

### **3. Dashboard Features**
- View your **civic engagement statistics**
- Check your **recent activity** and issue reports
- Use **quick action buttons** to report new issues
- Track your **community impact points**

### **4. Interactive Features**
- **Custom Cursor**: Move your mouse to see the animated glow effect
- **Scroll Animations**: Scroll through the page to see elements fade in with smooth animations
- **Dark Mode**: Toggle between light and dark themes using the button in the navigation

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start frontend development server
npm run dev:server       # Start backend server only
npm run dev:full         # Start both frontend and backend

# Production
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
```

## 🧪 Testing the API

You can test the API endpoints using curl or a tool like Postman:

### **Registration**
```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123"}'
```

### **Login**
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123"}'
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Getting Started**
1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/yourusername/civic-connect.git`
3. **Create** a feature branch: `git checkout -b feature/amazing-feature`
4. **Make** your changes
5. **Test** your changes thoroughly
6. **Commit** your changes: `git commit -m 'Add amazing feature'`
7. **Push** to your branch: `git push origin feature/amazing-feature`
8. **Open** a Pull Request

### **Contribution Guidelines**
- 📝 Write clear, concise commit messages
- 🧪 Add tests for new features
- 📖 Update documentation as needed
- 🎨 Follow the existing code style (ESLint configuration)
- 🔍 Ensure your code passes all linting checks

### **Areas for Contribution**
- 🐛 **Bug Fixes**: Report and fix issues
- ✨ **New Features**: Add civic engagement features
- 🎨 **UI/UX Improvements**: Enhance user experience
- 📱 **Mobile Optimizations**: Improve mobile responsiveness
- 🌍 **Accessibility**: Make the app more accessible
- 📝 **Documentation**: Improve guides and documentation

## 🚨 Troubleshooting

### **Common Issues**

**Port Already in Use:**
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9

# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**MongoDB Connection Issues:**
```bash
# Check if MongoDB is running
brew services list | grep mongodb

# Restart MongoDB
brew services restart mongodb/brew/mongodb-community
```

**CORS Issues:**
- Ensure backend is running on port 3001
- Check that frontend is running on port 5173
- Clear browser cache and cookies

## 🚀 Deployment

### **Frontend (Vercel)**
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Backend (Railway/Heroku)**
1. Create a new project on Railway or Heroku
2. Connect your GitHub repository
3. Set environment variables
4. Deploy the backend

### **Database (MongoDB Atlas)**
1. Create a MongoDB Atlas cluster
2. Update `MONGODB_URI` with Atlas connection string
3. Whitelist deployment server IPs

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Civic Connect

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

## 👨‍💻 Author & Credits

**Created by**: [Your Name](https://github.com/yourusername)

### **Acknowledgments**
- 🎨 **UI Inspiration**: Modern civic engagement platforms
- 📚 **Libraries**: Thanks to all the amazing open-source libraries used
- 🌟 **Icons**: Civic icon from [source]
- 🎬 **Animations**: AOS library for scroll animations

---

### **Connect With Us**

- 📧 **Email**: [contact@civicconnect.com](mailto:contact@civicconnect.com)
- 🐙 **GitHub**: [@yourusername](https://github.com/yourusername)
- 🐦 **Twitter**: [@civicconnect](https://twitter.com/civicconnect)
- 💬 **Discord**: [Join our community](https://discord.gg/civicconnect)

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/civic-connect?style=social)](https://github.com/yourusername/civic-connect/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/civic-connect?style=social)](https://github.com/yourusername/civic-connect/network)

Made with ❤️ for building better communities

</div>

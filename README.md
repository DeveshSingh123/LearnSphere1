The project follows a three-tier architecture consisting of the frontend, backend, and database layer.
The frontend is built using React, which provides a dynamic user interface for students and instructors.
The backend is developed using Node.js and Express, which handles API requests, authentication, course management, and business logic.
The database layer uses MongoDB to store user data, course information, and progress records.

The frontend communicates with the backend through REST APIs, and the backend interacts with the database to retrieve or store data. Authentication is implemented using JWT tokens, which secure the user sessions.

**It includes features like:**
Student dashboard
Instructor course upload
Admin management

**Features:**
 User Authentication (JWT )
 Instructor & Student Roles
 Course Creation & Enrollment
 Payment Integration (Razorpay)
 Refresh & Access Token 
 Fully Responsive UI
 
 **Tech Stack**
Frontend:
React.js (Vite)
Backend:
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication

**ARCHITECTURE FLOW**
          ┌───────────────────────────────┐
          │            USERS              │
          │ (Student / Instructor / Admin)
          └───────────────┬───────────────┘
                          │
                          ▼
          ┌───────────────────────────────┐
          │        FRONTEND (React)       │
          │  - UI (Dashboard, Courses)   │
          │  - API Calls (Axios/Fetch)   │
          └───────────────┬───────────────┘
                          │
                 HTTP Requests (REST API)
                          │
                          ▼
          ┌───────────────────────────────┐
          │     BACKEND (Node + Express)  │
          │  - Business Logic             │
          │  - Authentication (JWT)       │
          │  - Role Management            │
          └───────────────┬───────────────┘
                          │
                   Database Queries
                          │
                          ▼
          ┌───────────────────────────────┐
          │       DATABASE (MongoDB)      │
          │  - Users                     │
          │  - Courses                   │
          │  - Enrollments               │
          │  - Progress                  │
          └───────────────────────────────┘

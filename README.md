# PrepGrid — AI-Powered Interview & Practice Platform
## Problem Statement
This project is built for DevFusion Hackathon to create a complete placement preparation platform that helps engineering students prepare for technical interviews using AI-driven tools, coding practice, and personalized feedback.
## Description
- PrepGrid is a modern web application that enables students to practice coding, take AI-powered mock interviews, and attempt quizzes. 
- It provides personalized feedback, tracks performance, and helps users improve their weak areas efficiently.
## Tech Stack
### Frontend:
- Next.js (App Router)
- React
- Tailwind CSS
### Backend:
Node.js (API routes in Next.js)
### Database:
MongoDB
### Tools & APIs:
- Judge0 API (code execution)
- AI API (for interview & answer evaluation)
## Project Structure

prep/
│── src/             
│── public/           
│── node_modules/     
│── package.json      
│── tsconfig.json    
│── next.config.ts    
│── README.md
### How to Run Locally
- Clone the repository<br>
Bash
- git clone <your-repo-link>
- cd prep
- Install dependencies<br>
Bash
- npm install
- Setup environment variables
### Create a .env.local file:
- MONGODB_URI=your_mongodb_url
- AI_API_KEY=your_api_key
- JUDGE0_API_KEY=your_key
- Run the development server<br>
Bash
- npm run dev
- Open in browser: http://localhost:3000
## Features
### Practice Module
- Coding questions with Easy, Medium, Hard levels
- Topic-wise filtering (Arrays, Strings, etc.)
- Code editor integration (basic execution support)
- Track solved & unsolved questions
### AI Interview Module
- Role-based interviews (Frontend, Backend, DSA)
- AI-generated questions
- Answer evaluation with score & feedback
- Adaptive difficulty system
### AI Quiz Module
- Topic-based MCQ tests
- Timed quizzes
- Performance evaluation
### User System
- User authentication (Login/Register)
- Dashboard with progress tracking
- Activity monitoring
### Admin Features
- Manage question bank
- View user activity
### Basic analytics
### [Live Demo](https://drive.google.com/file/d/1zXkoldhDQhWPIJEfTozGmrqd2MiA02AW/view?usp=drivesdk)
👉 prepgrid-wheat.vercel.app
### Team Members
K. Srividya
### Limitations
- Limited API usage due to free tiers
- Some advanced features like voice input may be partial

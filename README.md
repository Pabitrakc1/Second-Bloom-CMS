🌸 SecondBloom – Elder Wellness & Community Management System

SecondBloom is a full-stack web application designed to support elder care, wellness, and community engagement.
It provides a calm, user-friendly platform where residents can share stories, manage interests, and participate in meaningful daily activities — emphasizing dignity, simplicity, and emotional well-being.

✨ Key Vision

“Because life deserves a second bloom.”
 SecondBloom focuses on:
 Emotional storytelling 📖
 Personalized interests 🎨
 Community connection 🤝
 Simple & accessible UI 🌿
 
🛠️ Tech Stack
🔹 Backend (Spring Boot)
  Java 21
  Spring Boot
  Spring Web (REST APIs)
  Spring Data JPA
  Hibernate
  MySQL
  Maven
  
🔹 Frontend (React)
  React (Vite)
  JavaScript (ES6+)
  Axios
  HTML5 & CSS3
  
🔹 Tools & Platform
  Git & GitHub 🧑‍💻
  Postman (API testing)
  MySQL Workbench
  VS Code / Eclipse 

🧩 Core Modules
🧓 Residents Module
  Add and view residents
  Store age, room, health notes
  Acts as the core entity of the system
📖 Stories Module
  Residents can share personal stories
  Story Wall to view all stories 
  Categories & moods supported
  Delete functionality with confirmation
🎯 Interests Module
  Manage interest types (gardening, art, music, etc.)
  Assign interests to residents
  Supports personalization & future recommendations  
🗓️ Activities & Food (UI Ready)  
  Daily activity structure
  Food schedule planning (extensible)
  Designed for future enhancement

🗂️ Backend Package Structure (Spring Boot)
  com.secondbloom
  │
  ├── controller      → REST controllers (API layer)
  ├── service         → Business logic
  ├── repository      → JPA repositories
  ├── model           → Entity classes
  ├── config          → CORS & configuration
  └── SecondBloomBackendApplication.java

📌 Key Design Principles
Separation of concerns
RESTful API architecture
Clean entity relationships
Scalable structure
🔄 Application Flow (How It Works)
Frontend sends API requests using Axios 🌐
Spring Boot controllers handle requests
Services process business logic
Repositories interact with MySQL database
Data is returned as JSON
React updates UI dynamically ⚡
🔐 CORS Handling
To allow frontend (localhost:5173) to communicate with backend (localhost:8080):
Centralized CORS configuration
Secure and explicit origin allowance
Prevents browser blocking issues
⚙️ Installation & Setup Guide
🔹 Prerequisites
   Java 21+
   Node.js (v18+ recommended)
   MySQL Server
   Git
🔹 Backend Setup (Spring Boot)
   cd SecondBloom-backend
     
   Configure database in application.properties:
  spring.datasource.url=jdbc:mysql://localhost:3306/secondbloom
  spring.datasource.username=YOUR_USERNAME
  spring.datasource.password=YOUR_PASSWORD
  spring.jpa.hibernate.ddl-auto=update
  server.port=8080
Run the application:
mvn spring-boot:run
✅ Backend runs at:
http://localhost:8080
🔹 Frontend Setup (React + Vite)
cd secondbloom-frontend
npm install
npm run dev
✅ Frontend runs at:
http://localhost:5173

🔗 API Endpoints (Sample)
Method	Endpoint	Description
GET	/api/residents	Fetch all residents
POST	/api/residents	Add a resident
GET	/api/stories	Fetch stories
POST	/api/stories/{residentId}	Add story
DELETE	/api/stories/{id}	Delete story
GET	/api/interests	Fetch interests
🎨 UI & UX Highlights
Clean, calm color palette 🌸
Card-based layouts
Elder-friendly text sizes
Minimal navigation.
Responsive design

🧠 Learning Outcomes
This project demonstrates:
Full-stack development skills
REST API design
Frontend–backend integration
Debugging (CORS, API, state issues)
Domain-driven thinking
Clean code organization

🚀 Future Enhancements
Edit story functionality ✏️
Activity recommendations based on interests 🤖
Role-based access (Admin / Caretaker)
Deployment (Render / Railway / Netlify)
Accessibility improvements (ARIA, contrast)

👤 Author

Pabitra Khatri
Full-Stack Developer (Java + React)
🌱 Passionate about building meaningful, human-centered applications

⭐ Final Note
SecondBloom is more than a CRUD application —
it is a thoughtful platform designed around people, emotions, and community.

# 📝 Notes Management API

![Notes API Banner](https://raw.githubusercontent.com/Priyankkhatri/notes-crud-assignment/main/banner.png)

### 📡 [API Status](https://notes-crud-api.onrender.com) | 📄 [Postman Documentation](https://documenter.getpostman.com/view/YOUR_ID/YOUR_LINK)

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=github)](#)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

A high-performance, enterprise-ready RESTful API for managing personal and professional notes. Optimized for high throughput with **Bulk Operations** and built following strict **MVC Architecture** principles.

---

## 🌟 Key Features

### ⚡ Optimized Performance
- **High-Velocity Bulk Actions**: Create and delete multiple notes in a single network request to minimize latency.
- **Smart Validation**: Native Mongoose schema-level validation paired with manual ID integrity checks.
- **Efficient Categorization**: Seamlessly organize notes using a strict Enum-based categorization system (`Work`, `Personal`, `Study`).

### 🏗️ Robust Architecture (MVC)
- **Modular Controllers**: Decoupled business logic from entry-point handlers.
- **Clean Routing**: Pure route definitions without inline logic for maximum maintainability.
- **Hardened Models**: Schema-driven data persistence with automatic timestamping.

### 📱 Developer-First Experience
- **Structured Responses**: Consistent response format `{ success, message, data }` across all endpoints.
- **Interactive Documentation**: Ready for integration with Postman and Swagger.
- **Environment Driven**: Fully configurable for local, staging, and production environments.

---

## 📂 Folder Structure

```text
src/
  ├── config/        # Database connectivity & environment config
  ├── controllers/   # High-concurrency logic handlers
  ├── middlewares/   # Specialized request processing (Auth, Logging)
  ├── models/        # Mongoose schemas & data integrity
  ├── routes/        # Logical API endpoint definitions (RESTful)
  ├── app.js         # Core Express application pipeline
  └── index.js       # Production-ready server startup script
```

---

## 📡 API Endpoints & Specification

### 📝 Single Note Operations
| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/notes` | Create a new note (Title/Content required) |
| **GET** | `/api/notes` | Retrieve all notes with full metadata |
| **GET** | `/api/notes/:id` | Fetch detailed view of a specific note |
| **PUT** | `/api/notes/:id` | Full replacement of a note record |
| **PATCH** | `/api/notes/:id` | Partial update (efficient field patches) |
| **DELETE** | `/api/notes/:id` | Permanent record deletion |

### 🚀 Bulk Operations
| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/notes/bulk` | Batch creation of multiple note objects |
| **DELETE** | `/api/notes/bulk` | Secure batch deletion using an array of IDs |

---

## 🚀 Quick Setup

1. **Clone & Install**:
   ```bash
   git clone https://github.com/Priyankkhatri/notes-crud-assignment.git
   cd notes-crud-assignment
   npm install
   ```

2. **Environment Configuration**:
   Create a `.env` file at the root:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_cluster_uri
   ```

3. **Launch**:
   - Development: `npm run dev`
   - Production: `npm start`

---

Developed with 💜 by **Priyank Khatri**

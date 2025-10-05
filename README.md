# Mini Vendor Catalog Manager

A full-stack web application that allows a vendor to **add, view, and delete products** from their catalog.  
Built with **React.js**, **Node.js + Express**, and **MongoDB Atlas**, fully deployed online.

---

## 🎯 Objective

This project demonstrates the ability to build and deploy an end-to-end full-stack application.  
It covers:

- Frontend development (React.js)  
- Backend development (Node.js + Express)  
- Database management (MongoDB Atlas)  
- Deployment on free hosting platforms

---

## 🛠️ Tech Stack

| Layer        | Technology        |
|------------- |----------------- |
| Frontend     | React.js, Axios  |
| Backend      | Node.js, Express |
| Database     | MongoDB Atlas    |
| Deployment   | Vercel (frontend), Render (backend) |

---

## ⚡ Live Demo

- **Frontend:** [https://YOUR_FRONTEND_URL](https://YOUR_FRONTEND_URL)  
- **Backend API Base URL:** [https://YOUR_BACKEND_URL/api/products](https://YOUR_BACKEND_URL/api/products)

---

## 📦 Features

### Frontend

- Display all products in a **grid/list view** with name, description, and price  
- Add new products using a **form**  
- **Delete products** using a delete button  
- **Automatic updates** on add/delete without page refresh  
- Responsive and clean UI

### Backend

- **REST API Endpoints**:

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | /api/products             | Fetch all products              |
| POST   | /api/products             | Add a new product               |
| DELETE | /api/products/:id         | Delete a product by ID          |

- Handles JSON requests/responses  
- CORS enabled for frontend-backend communication  
- Error handling for invalid requests or server errors  

### Database

- Cloud-hosted MongoDB Atlas  
- Collection: `products`  
- Schema:

```json
{
  "id": "unique identifier",
  "name": "string",
  "description": "string",
  "price": "number"
}
```
---

## ⚙️ Local Setup
# Prerequisites

Node.js (v18+)

npm (v9+)

MongoDB (Atlas or local instance)

Backend

Navigate to backend folder:
```bash
cd backend

#Install dependencies:

npm install


#Create a .env file (copy from .env.example) and set:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

# Start the backend server:
```bash
npm run dev


#Server will run at: http://localhost:5000
```
# Frontend
```bash
#Navigate to frontend folder:

cd frontend


#Install dependencies:

npm install


#Create .env file and set:

VITE_API_BASE=http://localhost:5000
```

# Start the frontend:
```bash
npm run dev


- Frontend will run at: http://localhost:5173
```
### 📸 Screenshots



### 📝 Notes

Ensure the backend is running before using the frontend locally

All new products are saved in MongoDB Atlas (cloud)

Delete updates the list instantly

## 🔗 Deployment Links

- Frontend (Vercel): https://YOUR_FRONTEND_URL

- Backend (Render): https://YOUR_BACKEND_URL

---
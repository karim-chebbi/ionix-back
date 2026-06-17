# MERN Backend API

A Node.js and Express.js REST API with MongoDB, JWT Authentication, Password Hashing, and Request Validation.

## 🚀 Features

- Express.js Server
- MongoDB Database with Mongoose
- JWT Authentication
- Password Hashing using Bcrypt
- Environment Variables with Dotenv
- Request Validation using Express Validator
- CORS Enabled
- Nodemon for Development

---

## 📦 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- Bcrypt
- Express Validator
- Dotenv
- CORS
- Nodemon

---

## 📥 Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move to the project folder:

```bash
cd your-project-name
```

Install dependencies:

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and copy the following variables:

```env
PORT="Your PORT"
DB_URI="Your MongoDB URI"
SECRET_KEY="Your Secret Key"
```

Example:

```env
PORT=5000
DB_URI=mongodb+srv://username:password@cluster.mongodb.net/databaseName
SECRET_KEY=mySuperSecretKey
```

---

## ▶️ Running the Project

### Development Mode

Using Nodemon:

```bash
npx nodemon server.js
```

or

```bash
nodemon server.js
```

### Production Mode

```bash
node server.js
```

---

## 📂 Project Structure

```bash
project/
│
├── config/
│   └── db.js
│
├── controllers/
│
├── middleware/
│
├── models/
│
├── routes/
│
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md
```

---

## 🔐 Environment Variables Description

| Variable | Description |
|-----------|-------------|
| PORT | Server port number |
| DB_URI | MongoDB connection string |
| SECRET_KEY | JWT secret key |

---

## 📡 API Endpoints

### Test Route

```http
GET /api/test
```

Response:

```json
{
  "msg": "API is working"
}
```

> Add your remaining routes here as your project grows.

---

## 📜 Available Scripts

```bash
npm install
```

Install project dependencies.

```bash
npx nodemon server.js
```

Run the server in development mode.

```bash
node server.js
```

Run the server in production mode.

---

## 👨‍💻 Author

Karim Chebbi

Full Stack Web Developer & Instructor

---

## 📄 License

This project is licensed under the MIT License.

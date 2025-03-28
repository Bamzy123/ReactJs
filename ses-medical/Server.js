// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = []; // Temporary storage for users

// Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.status(200).send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// Signup API
app.post("/api/signup", (req, res) => {
  const { fullName, email, phone, dob, gender, address, password } = req.body;
  users.push({ fullName, email, phone, dob, gender, address, password });
  res.status(201).send("User registered successfully");
});

// Start server
const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost://${PORT}`));
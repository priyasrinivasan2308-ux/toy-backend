const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import User Router
const userRouter = require("./Routers/UserRouters");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// User API
app.use("/api/user", userRouter);

// Test API
app.get("/", (req, res) => {
    res.send("BUBU TOYS SHOP Backend Server Running");
});

// Server Port
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });
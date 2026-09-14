import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import Contact from "./models/Contact.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });


// ===============================
// POST CONTACT FORM
// ===============================
app.post("/api/contact", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      interestedIn,
      message,
    } = req.body;

    if (!fullName || !email || !interestedIn || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const contact = await Contact.create({
      fullName,
      email,
      phone,
      interestedIn,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});


// ===============================
// GET ALL CONTACT MESSAGES
// ===============================
app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch messages",
    });
  }
});


// ===============================
// TEST ROUTE
// ===============================
app.get("/", (req, res) => {
  res.send("Contact backend is running");
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
import express from "express";
import { News } from "../models/News.js";

const newsRouter = express.Router();

// GET /api/test
newsRouter.get("/test", async (req, res) => {
  try {
    const news = await News.find(); // Fetch all news from the MongoDB collection
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// POST /api/test
newsRouter.post("/test", (req, res) => {
  // Access the request body
  const { headline, text, user } = req.body;

  console.log("Received request with body:", req.body);

  // Validate the received data
  if (!headline || !text) {
    return res.status(400).json({ message: "Headline and text are required" });
  }

  // Create a new news object
  const news = new News({
    id: "",
    headline,
    text,
    user,
  });

  // Save the news object to the database
  news
    .save()
    .then((savedNews) => {
      res.status(201).json(savedNews);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    });
});

export { newsRouter };

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { newsRouter } from "./routes/newsRouter.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://bjarnewilhelmhaugen:ord@nyheter.pzkl6.mongodb.net/?retryWrites=true&w=majority&appName=nyheter",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.static("../client/dist"));
app.use("/api/", newsRouter);

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// export const someApi = new express.Router();
// Routes

/*
import express from "express";
import mongoose from "mongoose";
import newsRouter from "./routes/newsRouter.js";
s
// Create an Express app
const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define routes

app.use("/api/news", newsRouter);

app.use(express.static("../client/dist"));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/

const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

app.use(express.json());

app.use(bodyParser.json({ limit: "5mb" }));

const dbConnectionString = process.env.CONNECTION_STRING;

const News = require("./models/news");

//Posting data to the database
app.post("/news", async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Getting data from the database
app.get("/news", async (req, res) => {
  try {
    const news = await News.find({});
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Kisii University Gossip Club Backend</h1>");
});

app.listen(3000, () => {
  mongoose.connect(dbConnectionString).then(() => {
    console.log("Successfully connected to the database");
  });
  console.log("Server is running on port 3000");
});

const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const port = 8000;
const MONGO_CONNECTION_STRING = "";
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("Database connected succesfully"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello MongoDB from NodeJS</h1>");
});
app.listen(port, () => {
  console.log(`Express Application is running on http://localhost:${port}`);
});
const apiRouter = require("./router/user.route");

app.use(apiRouter);

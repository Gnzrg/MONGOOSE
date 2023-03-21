const express = require("express");
const User = require("../model/user.js");
const Router = express.Router();

Router.post("/user", async (request, response) => {
  const body = request.body;
  const newUser = new User(body);
  const result = await newUser.save();

  response.json({
    data: result,
  });
});
module.exports = Router;

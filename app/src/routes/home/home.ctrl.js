"use strict"

const User = require("../../models/Users");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  }
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    try {
      const response = await user.register();
      return res.json(response);
    } catch (err) {
      return res.json({ success: false, msg: err });
    }

  }
};

module.exports = {
  output,
  process
};
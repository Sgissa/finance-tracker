const express = require("express");

const app = require("./api/index.js");

app.use(express.static(path.join(__dirname, "views")));

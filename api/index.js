const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../views")));

const logs = [
  { amount: 6, category: "Food" },
  { amount: 3, category: "Food" },
  { amount: 12, category: "Gas" },
  { amount: 5, category: "Food" },
];

app.get("/api/logs", function (req, res) {
  res.status(200).json({ logs: logs });
});

app.post("/api/logs/new", function (req, res) {
  logs.push(req.body.myExpense);
  res.status(200).json({
    newlogTotal: logs.length,
    logAdded: req.body.myExpense,
  });
});

const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;

console.log(`http://localhost:${port}`);

const express = require("express");
const app = express();
const VisitCounter = require("./designPattern/singleton");

app.all("/", (req, res, next) => {
  VisitCounter.increment();
  next();
});

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.get("/people-visited", (req, res) => {
  res.send(`No of people visited this web page ${VisitCounter.getCount()}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



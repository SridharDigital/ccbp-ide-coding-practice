const express = require("express");
const app = express();
var addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const date = addDays(new Date(), 100);
  let newdate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  response.send(newdate);
});

app.listen(3000);

module.exports = app;

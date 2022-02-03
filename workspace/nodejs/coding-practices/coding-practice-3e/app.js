const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let newdate = new Date();
  let date = `${newdate.getDate()}-${
    newdate.getMonth() + 1
  }-${newdate.getFullYear()}`;
  response.send(date);
});

app.listen(3000);

module.exports = app;

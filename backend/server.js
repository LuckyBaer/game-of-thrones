const express = require("express");
const app = express();
const unirest = require("unirest");
const port = 3001;
const baseUrl = "http://www.anapioficeandfire.com/api/houses";

app.get("/api/houses", (req, res) => {
  const request = unirest("GET", baseUrl);

  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    res.json(response.body || {});
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

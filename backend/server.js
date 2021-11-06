const express = require("express");
const app = express();
const unirest = require("unirest");
const port = 3001;
const baseUrl = "http://www.anapioficeandfire.com/api";

app.get("/*", (req, res) => {
  const request = unirest("GET", baseUrl + req.url);

  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    res.json(response.body || {});
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

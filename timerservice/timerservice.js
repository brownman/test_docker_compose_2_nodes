var axios = require("axios");
const express = require("express");
const app = express();
const port = 8080;

app.get("/alive", (req, res) => {
  res.send("timerservice.js");
});

app.get("/", (req, res) => {
  if (!process.env.loggerserviceUrl) {
    console.log("ENV: loggerserviceUrl is not set");
    process.exit(1);
  }
  const url_loggerservice=process.env.loggerserviceUrl + "/log";
  console.log('try post to ' + url_loggerservice)
  axios
    .post(url_loggerservice, { time: Date() })
    .then(() => {
      res.send("Time Is " + Date());
    })
    .catch(() => {
      res.send("error reporting log");
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

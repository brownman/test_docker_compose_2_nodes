var axios = require("axios");
const express = require("express");
const app = express();
const port = 8080;

//validations:
if (!process.env.loggerserviceUrl) {
  console.log("ENV: loggerserviceUrl is not set");
  process.exit(1);
}


const loggerserviceUrl = process.env.loggerserviceUrl + "/log";


app.get("/alive", (req, res) => {
  res.send("timerservice.js");
});

app.get("/", (req, res) => {
  console.log("try post to " + loggerserviceUrl);
  axios
    .post(loggerserviceUrl, { time: Date() })
    .then((res_tmp) => {
      console.log(res_tmp.data);
      res.send(res_tmp.data);
    })
    .catch((err) => {
      console.log(err.message);
      res.send("error reporting log");
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

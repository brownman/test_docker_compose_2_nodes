const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const port = 8081;
const filePath = path.join(__dirname, "usage.log");
console.log({ filePath });

app.use(express.json());

app.get("/usage.log", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  fs.promises
    .readFile(filePath)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      console.error(e);
      res.send("error loading file:" + filePath);
    });
});
app.get("/", (req, res) => {
  res.send("loggerservice");
});

app.post("/log", (req, res) => {
  if (req.body && req.body && req.body.time) {
    console.log('got data:', req.body.time);

    fs.promises
      .appendFile(filePath, "read at " + req.body.time + "\n")
      .then(() => {
        return res.send("done writing file");
      })
      .catch((e) => {
        console.log("e.message", e.message);
        return res.send("error writing file: ");
      });
  } else {
    return res.send("error extracting record");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const port = 8081;
const filePath = path.join(__dirname, "usage.log");
console.log({filePath})

app.use(express.json());

app.get("/usage.log", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  fs.promises.readFile(filePath)
  .then((data) => {
    res.send(data);
  })
  .catch((e) => {
      console.error(e)
    res.send('error loading file:' + filePath);
  });
});
app.get("/", (req, res) => {
  res.send("loggerservice");
});

app.post("/log", (req, res) => {
  console.log(req.body);
  if (req.body && req.body && req.body.time) {
    fs.promises
      .appendFile(filePath, "read at " + req.body.time + "\n")
      .then(() => {
        res.send("done writing file");
        return;
      })
      .catch((e) => {
        console.log({ e });
        res.send("error writing file: ");
        return;
      });
  } else {
    res.send("error extracting record");

    return;
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

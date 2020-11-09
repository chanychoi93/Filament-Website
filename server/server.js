const path = require("path");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../assets")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../index.html"));
});

app.use((err, req, res, next) => {
  console.log(`Global error handler received this error: ${err}`);
  res.status(500).send("Internal server error");
});

app.listen(3000, () => console.log("Listening on 3000"));

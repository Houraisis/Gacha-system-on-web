const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

// Static Middleware
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});

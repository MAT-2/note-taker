//Requiring express.js library
const express = require("express");
//variable PORT to be used for HTTP request
const PORT = process.env.PORT || 3001;
//Creating new express app.
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});
//PORT is being used when the app is listening to the HTTP requests.
app.listen(PORT, () => {
  console.log(`App is currently listening at http://localhost:${PORT}`);
});

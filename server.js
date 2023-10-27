//Requiring express.js library
const express = require("express");
const fs = require("fs");
//variable PORT to be used for HTTP request
const PORT = process.env.PORT || 3001;
//Creating new express app.
const app = express();

//Allow an HTTP GET Request to go to the root ("/") of the URL. If a request comes in, send a Hello World string.
// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

//Using this function allows Express to serve the static files from the public directory as shown within the files.
app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
  fs.readFile("notes.html", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    } else {
      const parseData = JSON.parse(data);
      parseData.push(content);
      writeToFile("notes.html", parseData);
      console.log(data);
    }
  });
});

app.post("/api/notes", (req, res) => {});

//PORT is being used when the app is listening to the HTTP requests.
app.listen(PORT, () => {
  console.log(`App is currently listening at http://localhost:${PORT}`);
});

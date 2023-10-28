//Requiring express.js library
const express = require("express");
const fs = require("fs");
const db = require("./db/db.json");
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
  res.json(db);

  //Routing to db.json object array
  // fs.readFile("./db/db.json", (err, data) => {
  //   if (err) {
  //     res.status(500).json({ error: err.message });
  //     return;
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.post("/api/notes", (req, res) => {
  //creating object called newNote, used for taking data and using it for out purposes.
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    //adding unique id for new notes
    id: Math.round(Math.random() * 10000),
  };
  //pushing array to db.json
  db.push(newNote);
  //Saving to db.json of the writing to be permanent.
  fs.writeFile("./db/db.json", db, (err, data) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      //Route Status 200, good! And parse the data in JSON format.
      res.status(200).json(data);
    }
  });
});

//PORT is being used when the app is listening to the HTTP requests.
app.listen(PORT, () => {
  console.log(`App is currently listening at http://localhost:${PORT}`);
});

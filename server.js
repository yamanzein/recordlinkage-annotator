var express = require("express");
const path = require("path");
var app = express(),
  bodyParser = require("body-parser");

const fs = require("fs");
const PORT = process.env.PORT || 8081;

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 100000,
  })
);
app.use(express.static(path.join(__dirname, "./recordlinkage-annotator/build")));

app.get("/server/getFile/:id", function (req, res) {
  console.log("Got a GET request fors s s s s ");
  console.log(req.params.id);
  fs.readFile('./Docs/' + req.params.id, function (err, originData) {
    var json = JSON.parse(originData);
    res.json(json);
  });
});

app.get("/server/getAllFiles", function (req, res) {
  console.log("All files are requested");
  fs.readdir("./Docs", function (err, files) {
    const jsonFiles = files.filter((el) => /\.json$/.test(el));
    res.json(jsonFiles);
  });
});

app.post("/server/overRideFile", async function (req, res) {
  //console.log(req.body.fileName);
  const pathToFile = './Docs/' + req.body.fileName;

  try{
    let data = req.body.user;
    fs.writeFile(pathToFile, JSON.stringify(data), function (err) {
      if (err) throw err;
      res.json("File has been added to the server");
      console.log('The "data to append" was appended to file!');
    });
  }catch(error){
    console.log(erro.response.body)
  }
  
});

// This responds a POST request for the homepage
app.post("/server/saveFile", function (req, res) {
  let data = req.body.user;
  let fileName = './Docs/' + req.body.fileName;
  if (fs.existsSync(fileName)) {
    res.json("File already exist or choose different file name");
  } else {
    fs.writeFile(fileName, JSON.stringify(data), function (err) {
      if (err) throw err;
      res.json("File has been added to the server");
      console.log('The "data to append" was appended to file!');
    });
  }
});

app.delete("/server/deleteFile", function (req, res) {
  const pathToFile = './Docs/' + req.body.fileName;
  console.log(req.body.fileName);
  fs.unlink(pathToFile, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("Successfully deleted the file.");
    }
  });
});

app.get('*', (req, res) => {
  console.log("Application started")
  res.sendFile(path.join(__dirname, './recordlinkage-annotator/build/','index.html'), function(request,err) {
    if (err) {
      res.status(500).send(err)
      console.log(err)
    }
    
  });
  
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server listening at http://%s:%s", host, port);
});

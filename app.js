var express = require("express");
var { v1: uuidv1 } = require('uuid');
var bodyParser = require("body-parser");
var mysql = require('mysql');

var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "sqlTest"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(bodyParser.json());

app.get("/api/tasks", function (req, res) {
  var sql = "SELECT * FROM taskDB";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(apiResponse(result));
  });
});

app.get("/api/tasks/:id", function (req, res) {
  var sql = "SELECT * FROM taskDB WHERE ID=?";
  con.query(sql,req.params.id, function (err, result) {
    if (err) throw err;
    res.send(apiResponse(result));
  });
});

app.post("/api/tasks", function (req, res) {
  var sql = "INSERT INTO taskDB (ID, TASK, TASK_STATUS) VALUES(?,?,?)";
  con.query(sql,[uuidv1(),req.body.TASK,req.body.TASK_STATUS], function (err, result) {
    if (err) throw err;
    res.send(apiResponse(result));
  });
});

app.put("/api/tasks/:id", function (req, res) {
  var sql = "UPDATE taskDB SET TASK = ?,TASK_STATUS= ? WHERE ID = ? ";
  con.query(sql, [req.body.TASK,req.body.TASK_STATUS, req.params.id], function (err, result) {
    if (err) throw err;
    res.send(apiResponse(result));
  });
});

app.delete("/api/tasks/:id", function (req, res) {
  var sql = "DELETE FROM taskDB WHERE ID = ?";
  con.query(sql, req.params.id, function (err, result) {
    if (err) throw err;
    res.send(apiResponse(result));
  });
});

function apiResponse(results){
  return JSON.stringify({results});
}

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
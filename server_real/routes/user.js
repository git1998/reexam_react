const { response } = require("express");
const express = require("express");
const db = require("../db");
const utils = require("../utils");

const router = express.Router();

router.post("/signup", (request, response) => {
  const { name, email, password } = request.body;

  const connection = db.openConnection();

  const statement = `insert into user
    (name,email,password) 
    values('${name}','${email}','${password}')`;

  connection.query(statement, (error, result) => {
    connection.end();
    response.send(utils.createResult(error, result));
  });
});

router.post("/login", (request, response) => {
  const { email, password } = request.body;

  const connection = db.openConnection();

  const statement = `select name,email,password from user where 
    email='${email}' and password='${password}'`;

  connection.query(statement, (error, users) => {
    connection.end();

    if (error) {
      response.send(utils.createResult(error, users));
    } else if (users.length == 0) {
      response.send(utils.createResult(null, users));
    } else {
      const user = users[0];
      response.send(utils.createResult(error, user));
    }
  });
});

router.get("/getlist", (request, response) => {
  const connection = db.openConnection();

  const statement = `select name from movielist`;

  connection.query(statement, (error, list) => {
    connection.end();

    if (error) {
      response.send(utils.createResult(error, list));
    } else if (list.length == 0) {
      response.send(utils.createResult(null, list));
    } else {
      response.send(utils.createResult(error, list));
    }
  });
});

module.exports = router;

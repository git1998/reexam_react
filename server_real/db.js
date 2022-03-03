const mysql = require("mysql");

const openConnection = () => {
  const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "manager",
    database: "react_practise",
  });

  connection.connect();

  return connection;
};

module.exports = {
  openConnection,
};

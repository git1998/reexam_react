const express = require("express");
const cors = require("cors");
const routerUser = require("../routes/user");

const app = express();

app.use(cors("*"));

app.use(express.json());

app.use("/user", routerUser);

app.listen(4000, () => {
  console.log("server started on port 4000");
});

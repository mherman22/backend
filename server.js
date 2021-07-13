const express = require("express");
const app = express();
// const bodyParser = require('body-parser');
const indexRoutes = require("./database/routes/index");
const Sequelize = require("sequelize");
const seq = require("./database/config/config");
const port = process.env.PORT || 5000;
const sequelize = new Sequelize(
  seq.development.database,
  seq.development.username,
  seq.development.password,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connection has been established successfully !!");
    sequelize
      .sync()
      .then(() => console.log("Database Synced !!"))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

app.use('/', indexRoutes);
app.listen(port, () => {
  console.log(`server running at ${port}`);
});

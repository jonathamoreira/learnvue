const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

//===> Import file: db.config.js
const database = require("./config/db.config");//conexão local mongoDb

mongoose.Promise = global.Promise;

//===> Connect databases
mongoose
  .connect(database.local.localDatabaseUrl, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(
    () => {
      console.log("Base de dados conectada");
    },
    (err) => {
      console.log("Erro ao conectar a base de dados" + err);
      process.exit();
    }
  );

// ===>>>Rotas da API
const index = require("./routes/index");
//TODO: Declarar rota user.routes.js

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.use(morgan("dev"));

app.use(index);
// Incluir depois chamada da rota use.routes.js

module.exports = app;

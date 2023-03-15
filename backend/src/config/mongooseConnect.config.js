const express = require('express')
const mongoose = require('mongoose')


const database = require("./db.config");//conexão local mongoDb

mongoose.Promise = global.Promise;

//===> Connect databases
mongoose
  .connect(database.local.localDatabaseUrl, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useCreateIndex: true,
    family: 4// auxilio a conexão com o MDb
  })
  .then(
    () => {
      console.log("Base de dados conectada")
    },
    (err) => {
      console.log("Erro ao conectar a base de dados" + err);
      process.exit();
    }
  );
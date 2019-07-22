const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require('require-dir');

// iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// iniciaondo o db
mongoose.connect("mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true }
);
requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3001);
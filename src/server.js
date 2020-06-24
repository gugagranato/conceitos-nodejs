const express = require('express');
const app = require("./app");

const server = express();

server.use(app);

app.listen(3333);

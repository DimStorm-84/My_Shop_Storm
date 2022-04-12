require("dotenv").config();

const express = require("express");

const POST = process.env.PORT || 5000; // указывает порт на коотом будет работать приложение

const app = express();

app.listen(PORT, () => console.log("Server started on port ${PORT}"));

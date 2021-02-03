"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var constants_1 = require("./config/constants");
var routes_1 = require("./routes");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Headers', '*');
    next();
});
app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});
app.use('/users', routes_1.userRouter);
app.listen(constants_1.PORT, function () {
    console.log("Server is listening on port " + constants_1.PORT);
});

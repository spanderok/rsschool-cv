"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var controllers_1 = require("../../controllers");
var express = require("express");
exports.router = express.Router({
    strict: true
});
exports.router.post('/', function (req, res) {
    controllers_1.userController.create(req, res);
});
exports.router.get('/', function (req, res) {
    controllers_1.userController.read(req, res);
});
exports.router.patch('/', function (req, res) {
    controllers_1.userController.update(req, res);
});
exports.router.delete('/', function (req, res) {
    controllers_1.userController.delete(req, res);
});

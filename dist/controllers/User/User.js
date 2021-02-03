"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var CrudController_1 = require("../CrudController");
var chechUser_1 = require("../../modules/chechUser");
var fs = require('fs');
var path = require('path');
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserController.prototype.create = function (req, res) {
        var string = fs.readFileSync('src/base.txt');
        var json = req.body;
        console.log(json);
        console.log(string);
        console.log(string.length);
        var data;
        if (string.length === 0) {
            data = [];
            data.push(json);
        }
        else {
            data = JSON.parse(string);
            data = chechUser_1.checkUser(json, data);
        }
        ;
        fs.writeFileSync('src/base.txt', JSON.stringify(data), function (err) {
            if (err)
                return console.log(err);
        });
        res.json(json);
    };
    ;
    UserController.prototype.read = function (req, res) {
        var string = fs.readFileSync('src/base.txt');
        res.json(JSON.parse(string.toString()));
    };
    UserController.prototype.update = function (req, res) {
        throw new Error("Method  implemented.");
    };
    UserController.prototype.delete = function (req, res) {
        throw new Error("Method not implemented.");
    };
    return UserController;
}(CrudController_1.CrudController));
exports.UserController = UserController;

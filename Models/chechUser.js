"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUser = void 0;
function checkUser(user, usersArr) {
    if (usersArr.length < 20) {
        usersArr.push(user);
    }
    else {
        if (user.score > usersArr[usersArr.length - 1].score) {
            usersArr.pop();
            usersArr.push(user);
        }
        ;
    }
    usersArr.sort(function (a, b) { return b.score - a.score; });
    return usersArr;
}
exports.checkUser = checkUser;
;

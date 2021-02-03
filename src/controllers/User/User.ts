import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import { checkUser } from '../../modules/chechUser';
const fs = require('fs');
const path = require('path');

export class UserController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        
        let string = fs.readFileSync('src/base.txt');
        let json = req.body;
        console.log(json);
        console.log(string);
        console.log(string.length);
        let data;
        if (string.length === 0) {
         data = [];
         data.push(json);
        } else {
         data = JSON.parse(string);
         data = checkUser(json, data);
        };
       fs.writeFileSync('src/base.txt', JSON.stringify(data), function (err) {
        if (err)
            return console.log(err);
    });
    res.json(json);

 };

    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {


        let string = fs.readFileSync('src/base.txt');
        res.json(JSON.parse(string.toString()));
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method  implemented.");
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

}

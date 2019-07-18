"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControlador_1 = require("../controladores/indexControlador");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexControlador_1.indexControler.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;

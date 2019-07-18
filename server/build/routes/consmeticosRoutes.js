"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cosmeticosControler_1 = require("../controladores/cosmeticosControler");
class CosmeticosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cosmeticosControler_1.cosmeticosControler.list);
        this.router.get('/:id', cosmeticosControler_1.cosmeticosControler.obtenerUno);
        this.router.post('/', cosmeticosControler_1.cosmeticosControler.create);
        this.router.put('/:id', cosmeticosControler_1.cosmeticosControler.update);
        this.router.delete('/:id', cosmeticosControler_1.cosmeticosControler.delete);
    }
}
const cosmeticosRoutes = new CosmeticosRoutes();
exports.default = cosmeticosRoutes.router;

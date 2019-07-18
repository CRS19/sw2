"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CosmeticosControler {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prod = yield database_1.default.query('SELECT * FROM cosmeticos');
            res.json(prod);
        });
    }
    obtenerUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield database_1.default.query('SELECT * FROM cometicos WHERE idcosmeticos = ?', [id]);
            console.log(productos);
            res.json({ text: 'Este producto' + req.params.id });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO cosmeticos set ?', [req.body]);
            res.json({ message: 'producto guardado' });
        });
    }
    delete(req, res) {
        res.json({ text: 'eliminando un cosmetico' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'actualizando un cosmetico' + req.params.id });
    }
}
exports.cosmeticosControler = new CosmeticosControler();
exports.default = exports.cosmeticosControler;

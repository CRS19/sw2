"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexControler {
    index(req, res) {
        res.json({ text: 'API esta /api/cosmeticos' });
    }
}
exports.indexControler = new IndexControler();

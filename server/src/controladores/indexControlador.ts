import {Request, Response } from 'express';
import { text } from 'body-parser';

class IndexControler {
    public index (req: Request,res: Response) {
        res.json({text: 'API esta /api/cosmeticos'})
    }
}

export const indexControler = new IndexControler();
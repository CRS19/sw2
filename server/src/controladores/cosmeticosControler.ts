import {Request, Response } from 'express';
import pool from '../database';
class CosmeticosControler {
    public async list (req: Request,res: Response): Promise<void>{
       const prod = await pool.query('SELECT * FROM cosmeticos');
       res.json(prod);
    }

    public async obtenerUno (req: Request,res: Response): Promise<void> {
        const { id } = req.params;
        const productos = await pool.query('SELECT * FROM cometicos WHERE idcosmeticos = ?', [id]);
        console.log(productos);
        res.json({text: 'Este producto'+ req.params.id});
    }

    public async create (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO cosmeticos set ?',[req.body] )
        res.json({message: 'producto guardado'});
    }

    public delete (req: Request, res: Response){
        res.json({text: 'eliminando un cosmetico' + req.params.id});
    }

    public update (req: Request, res: Response){
        res.json({text: 'actualizando un cosmetico' + req.params.id });
    }    
}

export const cosmeticosControler = new CosmeticosControler();
export default cosmeticosControler;
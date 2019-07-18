import {Router} from 'express';
import { cosmeticosControler } from '../controladores/cosmeticosControler'

class CosmeticosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', cosmeticosControler.list);
        this.router.get('/:id', cosmeticosControler.obtenerUno);
        this.router.post('/', cosmeticosControler.create);
        this.router.put('/:id', cosmeticosControler.update);
        this.router.delete('/:id', cosmeticosControler.delete);
    }
}

const cosmeticosRoutes = new CosmeticosRoutes();
export default cosmeticosRoutes.router;
import { Router } from 'express'; //defines la ruta
import { indexController } from '../controllers/indexController';

class IndexRoutes {

    public router: Router = Router();

    constructor() {

        this.config();


    }

    config(): void{
        //defines la ruta y en este caso se mostrar un mensaje del metodo en el controlador Index
        this.router.get('/', indexController.index);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
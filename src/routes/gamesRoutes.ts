import { Router } from 'express'; //defines la ruta
import  gamesController from '../controllers/gamesController'; 
class GamesRoutes {

    public router: Router = Router();

    constructor() {

        this.config();


    }

    config(): void{
        //defines la ruta y en este caso se mostrar HELLO
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.delete('/:id', gamesController.delete);
        this.router.put('/:id', gamesController.update);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
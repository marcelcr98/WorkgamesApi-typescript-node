import { Request, Response} from 'express';

class IndexController {

    index (req: Request,res: Response){

       res.json({text: 'API ES /api/games'})

    }
}

export const indexController = new IndexController();

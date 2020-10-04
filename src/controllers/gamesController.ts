import { Request, Response} from 'express';
import pool from '../database';
class GamesController {
   
    //pool es la mencion a la base de datos
    public async list (req: Request,res: Response){
        const games= await pool.query('SELECT * from game_db')
        res.json(games);

    }

    public async getOne (req: Request,res: Response): Promise<any>{
        const { id }=req.params;
        const games = await pool.query("SELECT * from game_db where id=?",[id])
        console.log(games);
        if(games.length>0){
            return res.json(games[0]);
        }
        res.status(404).json({text:"No se ha encontrado el juego"})
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO game_db set ?', [req.body]);
        res.json({Message: "Juego Guardado"})
    }


    public async delete (req: Request, res: Response):Promise<void>{
        const { id }=req.params;
        await pool.query('DELETE from game_db where id=?',[id])
        res.json({Message: "Juego Eliminado"})
    }


    public async update (req: Request, res: Response):Promise<void>{
        const { id }=req.params;
        await pool.query('UPDATE game_db set ?  where id = ?',[req.body, id]);
        res.json({Message: "Juego modificado"})
    }
}


const gamesController = new GamesController();
export default gamesController;
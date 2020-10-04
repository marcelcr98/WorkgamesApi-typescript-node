import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';


import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server{

    public app: Application;

    constructor(){
        // configuras los metodos e inicias las clases
        this.app =express();
        this.config()
        this.routes()
    }

    //mencionamos el server
    config(): void{

        this.app.set('port', process.env.PORT || 3000);
        //esto ve las peticiones
        this.app.use(morgan('dev'));
        this.app.use(cors());
        //muestra en formato json
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));

    }

    routes(): void{

        //AQUI UTILIZAS LAS RUTAS   

        this.app.use('/api/index',indexRoutes);
        this.app.use('/api/games',gamesRoutes);

    }

    start(): void{

        this.app.listen(this.app.get('port'), ()=>{

            console.log('Server on port', this.app.get('port'))

        });
    }


}

const server =new Server()
server.start()
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //defines la ruta
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //defines la ruta y en este caso se mostrar HELLO
        this.router.get('/', gamesController_1.default.list);
        this.router.get('/:id', gamesController_1.default.getOne);
        this.router.post('/', gamesController_1.default.create);
        this.router.delete('/:id', gamesController_1.default.delete);
        this.router.put('/:id', gamesController_1.default.update);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;

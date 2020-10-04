"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //defines la ruta
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //defines la ruta y en este caso se mostrar un mensaje del metodo en el controlador Index
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;

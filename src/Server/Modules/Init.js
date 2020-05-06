const express = require("express");
const cors = require("cors");
const Router = require("./Routers.js").Router;
class Server{
    constructor() {
        this.app = express();
        this.app.use(cors({ methods: ["POST", "GET"] }));
        this.app.use(express.json());
        this.app.use("/", Router);
        this.app.listen(4000);
    }
    
}

exports.Server = Server;

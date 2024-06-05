let express = require ("express");

let routes = express.Router();

let listroutes = require("./list.routes");


routes.use("/user",listroutes);


module.exports = routes;
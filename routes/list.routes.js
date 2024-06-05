let express = require("express");
const { listcontroller } = require("../controller");

let route = express.Router();

route.post("/post", listcontroller.register);
route.get("/get/id:", listcontroller.findAlllist);
route.delete("/delete/id:", listcontroller.deletelist);
route.put("/delete/id:", listcontroller.updatalist);


module.exports = route;
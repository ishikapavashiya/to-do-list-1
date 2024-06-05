require("dotenv").config();
let http = require("http");
let express = require("express");
const DBconnect = require("./DB/Dbconnect");
let routes = require("./routes");
const bodyParser = require("body-parser");
let app = express();
// josn body
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json())
//routes
app.use("v1",routes);

// Db connect
DBconnect();


http.createServer(app).listen(process.env.PORT, () => {
    console.log(`servre streaed${process.env.PORT}`);
})
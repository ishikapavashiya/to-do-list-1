let { todoservice } = require("../service");


let register = async (req, res) => {
    try {
        console.log(req.body);

        let body = req.body;
        let result = await todoservice.register(body);
        console.log(result, "add data");

        res.status(201).json({
            message: " add data sucessfully", result,
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}
let findAlllist = async (req, res) => {
    try {
        console.log(req.body);

        let body = req.body;
        let result = await todoservice.findAlllist();
        console.log(result, "add data");

        res.status(200).json({
            message: " add data sucessfully", result,
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}
let deletelist= async (req, res) => {
    try {
        console.log(req.body);

        let body = req.body;
        let result = await todoservice.deletelist(id);
        console.log(result, "add data");

        res.status(200).json({
            message: " add data sucessfully", result,
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}
let updatalist= async (req, res) => {
    try {
        console.log(req.body);

        let body = req.body;
        let result = await todoservice.updatalist(id,body);
        console.log(result, "add data");

        res.status(200).json({
            message: " add data sucessfully", result,
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}
module.exports={register,findAlllist,deletelist,updatalist}
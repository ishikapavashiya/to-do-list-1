let mongoose = require ("mongoose");

let DBconnect =()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("database connect sucess");
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports = DBconnect;
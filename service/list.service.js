const { todolistSchema } = require("../model")

let register = (body) => {
    console.log(body, "add data");
    return todolistSchema.create(body);
}
let findAlllist = () => {
    return todolistSchema.find()
}
let deletelist = (id) => {
    return todolistSchema.findByIdAndDelete(id)
}
let updatalist = (id, body) => {
    return todolistSchema.findByIdAndUpdate(id, body)
}
module.exports = { register, findAlllist, deletelist, updatalist };
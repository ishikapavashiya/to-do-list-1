let mongoose = require("mongoose");

let todolistSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    Description: {
        type: String,
    },
    dueDate: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
    },
});

let list = mongoose.model(" todolistSchema", todolistSchema);

module.exports = list;
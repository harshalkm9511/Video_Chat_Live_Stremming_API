const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    }
});

const Chats = mongoose.model("Chats", chatSchema);

module.exports = Chats;
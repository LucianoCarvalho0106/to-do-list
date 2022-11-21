const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
    tarefa:{type:String}
})


module.exports = mongoose.model("People",peopleSchema)
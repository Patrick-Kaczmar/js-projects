const mongoose = require("mongoose")

const PeopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  height: Number,
})

module.exports = mongoose.model("People", PeopleSchema)

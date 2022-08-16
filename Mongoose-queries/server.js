const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/people_db", () => {
  console.log("connected to database")
})

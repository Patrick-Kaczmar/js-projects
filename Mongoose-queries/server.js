const mongoose = require("mongoose")
const People = require("./People")

mongoose.connect("mongodb://localhost/people_db", () => {
  console.log("connected to database")
})

async function run() {
  const person = await People.find()

  console.log(person)
}
run()

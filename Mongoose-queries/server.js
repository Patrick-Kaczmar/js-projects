const mongoose = require("mongoose")
const People = require("./People")

mongoose.connect("mongodb://localhost/people_db", () => {
  console.log("connected to database")
})

const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("hello world i am god bow to me")
})

app.get("/api", (req, res) => {
  async function showAllPeople() {
    const people = await People.find()
    res.send(people)
  }
  showAllPeople()
})

async function addPerson() {
  People.create({
    name: "Jason",
    age: 17,
    height: 6.0,
  })
}
addPerson()

app.listen(3000)

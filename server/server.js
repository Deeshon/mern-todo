const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const Todo = require('./models/Todo')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://deeshonhunukumbura18:nyctophile101@cluster0.txw0jxy.mongodb.net/mern-todo?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to DB")).catch(console.error)


app.get("/todos", async (req, res) => {
    const todos = await Todo.find()

    res.json(todos)
})

app.post("/todo", async (req, res) => {
    const item = new Todo({
        text: req.body.text
    })

    await item.save()

    res.json(item)
})


app.listen(3001, () => console.log("Server started on port 3001"))



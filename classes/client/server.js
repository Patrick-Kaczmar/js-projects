const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/api', (req, res) => {
    res.json({
        "users": ["patrick", "kyle", "brian"]
    })
})

app.listen(5000)
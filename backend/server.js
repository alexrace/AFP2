const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("It's working!")
})

app.listen(port, () => {
    console.log(`A szerver elindult a http://localhost:${port}/ címen!`)
})
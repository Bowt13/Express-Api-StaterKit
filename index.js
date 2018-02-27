const express = require('express')
const db = require('./database')

const app = express()
const port = process.env.PORT || 3030

app.get('/', (req, res) => {
  res.json({ message: 'Yo!' })
})

Players.findAll().then(players => {
  console.log(users)
})
app.listen(port, () => {
  console.log(`
Server is listening on ${port}.

Open http://localhost:${port}

to see the app in your browser.
    `)
})

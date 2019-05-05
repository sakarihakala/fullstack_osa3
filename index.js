const express = require('express')

const app = express()

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Martti Tienari",
      "number": "040-123456",
      "id": 2
    },
    {
      "name": "Arto Järvinen",
      "number": "040-123456",
      "id": 3
    },
    {
      "name": "Lea Kutvonen",
      "number": "040-123456",
      "id": 4
    }
  ]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/info', (req, res) => {
    const count = persons.length
    const date = new Date()

    res.send(`<p>Puhelinluettelossa on ${count} henkilön tiedot</p><p>${date}</p>`)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server is runninng on port ${PORT}`)
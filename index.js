const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

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

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)

    res.status(204).end()
})

app.post('/api/persons', (req,res) => {
    console.log(req.body)
    const body = req.body

    if (!body.name) {
        console.log('Yhteystiedolta puuttuu nimi, ei tallenneta.')
        return res.status(400).json({
            error: "Nimi on pakollinen"
        })
    }

    if (!body.number) {
        console.log('Yhteystiedolta puuttuu numero, ei tallenneta.')
        return res.status(400).json({
            error: "Numero on pakollinen"
        })
    }

    const person = ({
        id: Math.floor(Math.random() * Math.floor(10000)),
        name: req.body.name,
        number: req.body.number
    })
    console.log(person)
    persons = persons.concat(person)

    res.json(person)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server is runninng on port ${PORT}`)
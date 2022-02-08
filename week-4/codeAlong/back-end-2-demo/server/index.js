const express = require('express')
const cors = require('cors') //cors - a middleware help communication between front-end and back-end
const movies = require('./db.json')
const ctrl = require('./controller')

const app = express()

const port = 4004 

app.use(express.json())
app.use(cors())

//ENDPOINTS

app.get('/api/movies', ctrl.getAllMovies)
app.delete('/api/movies/:id', ctrl.deleteMovie)
app.post('/api/movies', ctrl.createMovie)
app.put('/api/movies/:id', ctrl.updateMovie)

app.listen(port, () => console.log(`Avengers Assemble... on port ${port}`))
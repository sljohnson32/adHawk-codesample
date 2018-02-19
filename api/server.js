const express = require('express')
const cors = require('cors')

const app = express()
const bodyParser = require('body-parser')

const { init, Beer, Tap } = require('./db')


app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(bodyParser.json())

/*

  ROUTES

*/
app.get('/api/taps', function (req, res) {
  return Tap.findAll()
    .then(taps => {
      res.status(200).json(taps)
    })
})

app.post('/api/taps', function (req, res) {
  return Tap.create(req.body)
    .then(tap => {
      res.status(200).json(tap)
    })
})

app.put('/api/taps/:tap_id', function (req, res) {
  const id = req.params.tap_id

  return Tap.update(req.body, { where: { id } })
    .then(() => Tap.findById(id))
    .then(tap => {
      res.status(200).json(tap)
    })
})

app.delete('/api/taps/:tap_id', function (req, res) {
  const id = req.params.tap_id

  return Tap.destroy({ where: { id } })
    .then(() => {
      res.status(202).json(`Tap with id: ${id} was deleted`)
    })
})

app.get('/api/beers', function (req, res) {
  return Beer.findAll()
    .then(beers => {
      res.status(200).json(beers)
    })
})

app.post('/api/beers', function (req, res) {
  return Beer.create(req.body)
    .then(tap => {
      res.status(200).json(tap)
    })
})

app.put('/api/beers/:beer_id', function (req, res) {
  const id = req.params.beer_id

  return Beer.update(req.body, { where: { id } })
    .then(() => Beer.findById(id))
    .then(tap => {
      res.status(200).json(tap)
    })
})

app.delete('/api/beers/:beer_id', function (req, res) {
  const id = req.params.beer_id

  return Beer.destroy({ where: { id }})
    .then(() => {
      res.status(204)
    })
})

/*
  Init db

  Preload some data for ease
*/
init()
.then(() => {
  return Tap.findById(1)
})
.then(tap => {
  if (!tap) {
    console.log('CREATING INITIAL TAP')
    return Tap.create({ name: 'Classic' })
  }

  return tap
})
.then(tap => {
  console.log('tap', tap)
  return Beer.findAll()
    .then(beers => {
      if (!beers.length) {
        console.log('CREATING INITIAL BEERS')
        const now = Date.now()
        const week = 1000 * 60 * 60 * 24 * 7
        const aWeekAgo = now - week
        const twoWeeksAgo = aWeekAgo - week

        return Beer.bulkCreate([
          { name: 'Craft Lager', brewer: 'Upslope', style: 'AMBER_LAGER', on_tap: true, start_date: new Date(now), tap_id: 1 },
          { name: 'Doppler Effect', brewer: 'Ombud', style: 'SPECIALTY_BEER', on_tap: false, start_date: new Date(twoWeeksAgo), end_date: new Date(aWeekAgo), tap_id: 1 }
        ])
      }
    })
})
.then(() => {
  // Listen

  app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
  })
})

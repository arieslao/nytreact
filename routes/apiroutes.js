var Router = require('express').Router()
var db = require('../models')

Router.get('/', function (req, res) {
  db.Article.find({})
    .then(r => {
      res.json(r)
    })
    .catch(e => {
      console.log(e)
    })
})
Router.get('/', function (req, res) {
  // req.params.id
  db.Article.findById(req.params.id)
    .then(r => {
      res.json(r)
    })
    .catch(e => {
      console.log(e)
    })
})

Router.post('/', function (req, res) {
  // req.body
  db.Article.create({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  })
    .then(r => {
      res.json(r)
    })
    .catch(e => {
      console.log(e)
    })
})

// Router.put('/users:id', function (req, res) {
//   // req.params.id
// })

Router.delete('/', function (req, res) {

})
Router.delete('/', function (req, res) {
  // req.params.id
})

module.exports = Router

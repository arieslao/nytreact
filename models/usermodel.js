var mongoose = require('mongoose')

var Schema = mongoose.Schema

var articles = new Schema({
  title: {
    type: String,
    default: 
  },
  date: {
    type: String,
    default: 
  },
  url: {
    type: String,
    default: 
  }
})

var articles = mongoose.model('Article', articlemodel)

module.exports = User

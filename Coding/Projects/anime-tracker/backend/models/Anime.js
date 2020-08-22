const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema({
  title: {
    type: String,
    trim:true,
    required: [true, 'Please add some text']
  },
  image: {
    type: String,
    required: [true, 'Please add image link']
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Anime', AnimeSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;
const path = require('path');

const ImageSchema = new Schema({
  title: String,
  description: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
});


module.exports = mongoose.model('vistas', ImageSchema);

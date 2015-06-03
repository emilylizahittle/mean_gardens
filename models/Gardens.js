var mongoose = require('mongoose');

var GardenSchema = new mongoose.Schema({
  name: String,
  address: String,
  lat: Number,
  lng: Number
});

mongoose.model('Garden', GardenSchema);
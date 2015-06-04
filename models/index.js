var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/gardens');

var GardenSchema = new mongoose.Schema({
  name: String,
  address: String,
  lat: String,
  lng: String
});

var Garden = mongoose.model('Garden', GardenSchema);
module.exports = mongoose.model('Garden', GardenSchema);

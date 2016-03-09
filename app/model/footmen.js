var mongoose = require('mongoose');

var footmenSchema =  new mongoose.Schema ({
  blabla: { type: String, default: ''},
  yyy: { type: String, default: ''}
});

module.exports = mongoose.model('footmens', footmenSchema);


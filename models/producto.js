

import mongoose, { Schema } from 'mongoose';

// Define movie schema
var productoSchema = new Schema({
  identificador: {
    type: String,
    unique: true,
  },
  category: String,
  price: String,
  stocked: String,
  name: String,
  days: Array,
  times: Array,
});



//Important: 
// Connect to MongoDB
// http://mongoosejs.com/docs/guide.html -> Search 'createConnect' (Recommended to
// disable autoindex in production adversely affects performance).
// Put =>,{ config: { autoIndex: false } };


// This line loads the cloud server mongodb (mlab.com server in amazon)
mongoose.connect('mongodb://useronlyread:useronlyread123@ds135394.mlab.com:35394/productos', {
  config: {
    autoIndex: false
  }
});



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('CONECTADO A PRODUCTOS!')
});


// Export Mongoose model
export default mongoose.model('producto', productoSchema);

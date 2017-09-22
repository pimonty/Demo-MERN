
//Fichero sin dependencia su función es crear una base de datos de peliculas
//node_modules/babel-cli/bin/babel-node.js cargaproductos.js (ejecutar esto una sola vez)

import mongoose from 'mongoose';
import Productmodel from './models/producto';

const cargaproductos =[
        {identificador: '1', category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {identificador: '2', category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {identificador: '3', category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {identificador: '4', category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {identificador: '5', category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {identificador: '6', category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
         {identificador: '7', category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {identificador: '8', category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {identificador: '9', category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {identificador: '10', category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {identificador: '11', category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {identificador: '12', category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
         {identificador: '13', category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {identificador: '14', category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {identificador: '15', category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {identificador: '16', category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {identificador: '17', category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {identificador: '18', category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
         {identificador: '19', category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {identificador: '20', category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {identificador: '21', category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {identificador: '22', category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {identificador: '23', category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {identificador: '24', category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
      ];


      // mongoose.connection.close();

// Connect to MongoDB ¿?¿? si hay varias conexiones a lo mismo es con createConnection: http://mongoosejs.com/docs/api.html#index_Mongoose-createConnection
//mongoose.createConnection('mongodb://localhost/productos');

// console.log('AAAAAAAAAAAAAAAAAAa');
// // CONNECTION EVENTS
// // When successfully connected
// mongoose.connection.on('connected', function () {
//   console.log('Mongoose default connection open to ' + dbURI);
// });
//
// // If the connection throws an error
// mongoose.connection.on('error',function (err) {
//   console.log('Mongoose default connection error: ' + err);
// });
//
// // When the connection is disconnected
// mongoose.connection.on('disconnected', function () {
//   console.log('Mongoose default connection disconnected');
// });



// Go through each movie
cargaproductos.map(data => {
  // Initialize a model with movie data
  const producto = new Productmodel(data);

  console.log('data:'+data);

  // and save it into the database
  producto.save();
});

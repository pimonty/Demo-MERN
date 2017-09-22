//Main controller of the products.

import Producto from '../models/producto';
import moment from 'moment';

// Arrays for testing
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];


export const index = (req, res, next) => {
// Locate all products and return them in JSON
  Producto.find().lean().exec((err, productos) => res.json(
    // Iterate through each product
    { productos: productos.map(producto => ({
      ...producto,
      days,     // and append days
      times,    // and times to each
    }
    ))}

    // Alternative.
    // { productos: productos.map(producto => ( (producto.days = days) && (producto.times = times) && producto ))}

  )
);
};

import express, { Router } from 'express';


// Import index action from movies controller
import { index } from './controllers/productos';

// Initialize the router
const router = Router();

//Get "/v1/productos.json" path with the index coming from the product controller

  router.route('/productos.json')
    .get(index);


export default router;

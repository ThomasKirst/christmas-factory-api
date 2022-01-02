import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import CategoriesRoutes from './routes/categories.routes.js';
import ProductsRoutes from './routes/products.routes.js';

const connectionString = 'mongodb://localhost:27017/christmas-factory-api';

mongoose.connect(connectionString);

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.json({ status: 'Server is up and running' });
});

server.use(CategoriesRoutes);
server.use(ProductsRoutes);

server.listen(4000, () => console.log('Server is started'));

import { Router, Request, Response } from 'express';
import ProductsController from '../controller/products.controller';
import ProductsService from '../services/products.service';
import ProductsRepository from '../repositories/products.repository';

const router = Router();
const productRepository = new ProductsRepository();
const productService = new ProductsService(productRepository);
const productController = new ProductsController(productService);

router.get('/', (req: Request, res: Response) => {
  return productController.getProducts(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
  return productController.getProductById(req, res);
});

router.post('/', (req: Request, res: Response) => {
  return productController.registerProduct(req, res);
});

router.put('/:id', (req: Request, res: Response) => {
  return productController.updateProduct(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
  return productController.removeProduct(req, res);
});

export default router;

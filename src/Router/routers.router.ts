import { Router, Request, Response } from 'express';
import {
  listProducts,
  registerProduct,
  // updateProduct,
  // removeProduct,
} from '../controller/products.controller';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Bem-vindo à rota principal!' });
});

router.get('/produtos', listProducts);
router.post('/produtos', registerProduct);
// router.put('/produtos/:id', updateProduct);
// router.delete('/produtos/:id', removeProduct);

export default router;

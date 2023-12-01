import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

class ProductsController {
  private productsServices: ProductsService;

  constructor(productsServices: ProductsService) {
    this.productsServices = productsServices;
  }

  async getProducts(req: Request, res: Response) {
    try {
      const products = await this.productsServices.getProducts();

      if (!products) {
        return res.status(400).json({ error: 'Product list not found' });
      }

      return res.status(200).send(products);
    } catch (err) {
      throw new Error('Error when searching for products');
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const product = req.params.id;
      const productsId = await this.productsServices.getProductById(product);

      if (!productsId) {
        return res.status(400).json({ error: 'Product not found' });
      }

      return res.status(200).send(productsId);
    } catch (err) {
      throw new Error('Error when searching for product by ID');
    }
  }

  async registerProduct(req: Request, res: Response) {
    try {
      const addProducts = await this.productsServices.registerProduct(
        req.body.id,
        req.body.name,
        req.body.price,
        req.body.description,
        req.body.manufacturer,
      );

      if (!addProducts) {
        return res.status(400).json({ error: 'Product not added' });
      }

      return res.status(200).send(addProducts);
    } catch (err) {
      throw new Error('Error when adding product');
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const updateProducts = await this.productsServices.updateProduct(
        req.params.id,
        req.body.name,
        req.body.price,
        req.body.description,
        req.body.manufacturer,
      );

      if (!updateProducts) {
        return res.status(400).json({ error: 'Product not updated' });
      }

      return res.status(200).send(updateProducts);
    } catch (err) {
      throw new Error('Error when updating product');
    }
  }

  async removeProduct(req: Request, res: Response) {
    try {
      const deleteProducts = await this.productsServices.removeProduct(
        req.params.id,
      );

      if (!deleteProducts) {
        return res.status(400).json({ error: 'Product not removed' });
      }

      return res.status(200).send(deleteProducts);
    } catch (err) {
      throw new Error('Error when removing product');
    }
  }
}

export default ProductsController;

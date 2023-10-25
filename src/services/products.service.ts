import IProductsRepository from '../interfaces/product.interface';

class ProductsService {
  private productsRepository: IProductsRepository;

  constructor(productsRepository: IProductsRepository) {
    this.productsRepository = productsRepository;
  }

  async getProducts() {
    try {
      const db = await this.productsRepository.getProductsDB();

      return db;
    } catch (error) {
      throw new Error('Error when searching for products');
    }
  }

  async getProductById(id: string) {
    try {
      const db = await this.productsRepository.getProductByIdDB(id);
      return db;
    } catch (error) {
      throw new Error('Error when searching for product by ID');
    }
  }

  async registerProduct(
    id: string,
    nameProduct: string,
    unit: number,
    price: number,
  ) {
    try {
      const db = await this.productsRepository.registerProductDB(
        id,
        nameProduct,
        unit,
        price,
      );
      return db;
    } catch (error) {
      throw new Error('Error when adding product');
    }
  }

  async updateProduct(
    id: string,
    nameProduct: string,
    unit: number,
    price: number,
  ) {
    try {
      const db = await this.productsRepository.updateProductDB(
        id,
        nameProduct,
        unit,
        price,
      );
      return db;
    } catch (error) {
      throw new Error('Error when updating product');
    }
  }

  async removeProduct(id: string) {
    try {
      const db = await this.productsRepository.removeProductDB(id);
      return db;
    } catch (error) {
      throw new Error('Error when removing product');
    }
  }
}

export default ProductsService;

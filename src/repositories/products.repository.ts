import IProductsRepository, {
  IProductProps,
} from '../interfaces/product.interface';
import database from '../database/products.database';

class ProductsRepository implements IProductsRepository {
  private db;

  constructor() {
    this.db = database.firestore().collection('produtos');
  }

  async getProductsDB(): Promise<IProductProps[]> {
    try {
      const products = await this.db.get();
      const productsDB = products.docs.map((doc) => ({
        ...(doc.data() as IProductProps),
      }));
      return productsDB;
    } catch (error) {
      throw new Error('Error when searching for products');
    }
  }

  async getProductByIdDB(id: string): Promise<IProductProps | any> {
    try {
      const productId = await this.db.doc(id).get();
      const productIdDB = productId.data();

      return productIdDB;
    } catch (error) {
      throw new Error('Error when searching for product by ID');
    }
  }

  async registerProductDB(
    id: string,
    nameProduct: string,
    unit: number,
    price: number,
  ): Promise<IProductProps | any> {
    try {
      const newProduct = {
        nameProduct: nameProduct,
        unit: unit,
        price: price,
      };

      const addProduct = await this.db.add(newProduct).then((docRef) => {
        return docRef.update({ id: docRef.id });
      });

      if (addProduct) {
        return 'Product registered successfully!';
      }

      return addProduct;
    } catch (error) {
      throw new Error('Error when adding product.');
    }
  }

  async updateProductDB(
    id: string,
    nameProduct: string,
    unit: number,
    price: number,
  ): Promise<IProductProps | any> {
    try {
      const dataProduct = {
        id: id,
        nameProduct: nameProduct,
        unit: unit,
        price: price,
      };
      const updateProduct = await this.db.doc(id).update(dataProduct);

      if (updateProduct) {
        return 'Product updated successfully!';
      }

      return updateProduct;
    } catch (error) {
      throw new Error('Error when updating product.');
    }
  }

  async removeProductDB(id: string): Promise<IProductProps | any> {
    try {
      const removeProduct = await this.db.doc(id).delete();

      if (removeProduct) {
        return 'Product removed successfully!';
      }

      return removeProduct;
    } catch (error) {
      throw new Error('Error when removing product.');
    }
  }
}

export default ProductsRepository;

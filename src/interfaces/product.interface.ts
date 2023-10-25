export interface IProductProps {
  id: string;
  nameProduct: string;
  unit: number;
  price: number;
}

interface IProductsRepository {
  getProductsDB(): Promise<IProductProps[]>;
  getProductByIdDB(id: string): Promise<IProductProps>;
  registerProductDB(
    id: string,
    nameProduct: string,
    unit: number,
    price: number,
  ): Promise<string>;
  updateProductDB(
    id: string,
    nameProduct: string,
    unit: number,
    price: number,
  ): Promise<string>;
  removeProductDB(id: string): Promise<string>;
}

export default IProductsRepository;

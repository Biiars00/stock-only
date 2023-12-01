export interface IProductProps {
  id: string;
  name: string;
  price: number;
  description: string;
  manufacturer: string;
}

interface IProductsRepository {
  getProductsDB(): Promise<IProductProps[]>;
  getProductByIdDB(id: string): Promise<IProductProps>;
  registerProductDB(
    id: string,
    name: string,
    price: number,
    description: string,
    manufacturer: string,
  ): Promise<string>;
  updateProductDB(
    id: string,
    name: string,
    price: number,
    description: string,
    manufacturer: string,
  ): Promise<string>;
  removeProductDB(id: string): Promise<string>;
}

export default IProductsRepository;

import { IProduct, defaultProduct } from '../interfaces/IProduct.interface';
export class ProductService {


  constructor() {
  //init
  }
  
  //getProducts
  async getProducts( amount = 15): Promise<IProduct[]> {

    const results: IProduct[] = [];
    for (let i = 0; i < amount; i++) {
      results.push(defaultProduct);
      
    }
    return results
  }

  async getProduct(id: string): Promise<IProduct> {
    console.log(id)
    return defaultProduct;
  }

}
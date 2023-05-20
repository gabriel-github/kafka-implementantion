import { Product } from "../entity/product";


export abstract class ProductRepository {
  abstract create(product: Product): Promise<void>;
}
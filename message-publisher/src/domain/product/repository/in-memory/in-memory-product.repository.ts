import { Product } from "../../entity/product";
import { ProductRepository } from "../product.repository";


export class InMemoryProductRepository implements ProductRepository {
  products: Product[] = []

  async create(product: Product): Promise<void> {
    this.products.push(product)
  }

}
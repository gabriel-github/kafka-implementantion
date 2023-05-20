import { InMemoryProductRepository } from "../repository/in-memory/in-memory-product.repository";
import { Product } from "./product";

describe('Produc unit tests', () => {
  let inMemoryProductsRepository: InMemoryProductRepository;

  beforeEach(() => {
    inMemoryProductsRepository = new InMemoryProductRepository();
  });

  it('should be create a product', () => {
    const product = new Product('Product 1', 100);

    inMemoryProductsRepository.create(product);

    expect(inMemoryProductsRepository.products[0]).toEqual(product);
    expect(inMemoryProductsRepository.products).toHaveLength(1);
  });
})
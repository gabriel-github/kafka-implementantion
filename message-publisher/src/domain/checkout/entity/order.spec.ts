import { Customer } from "src/domain/customer/entity/customer";
import { Product } from "src/domain/product/entity/product";
import { Order } from "./order";
import { InMemoryOrderRepository } from "../repository/in-memory/in-memory-order.repository";


describe('Order unit tests', () => {
  let inMemoryOrderRepository: InMemoryOrderRepository;


  beforeEach(() => {
    inMemoryOrderRepository = new InMemoryOrderRepository();
  });

  it('should be create a order', () => {
    const customer = new Customer('Customer 1', '786.786.586-89', 18);
    const product = new Product('Produc 1', 100);

    const order = new Order(customer.id, [product])

    inMemoryOrderRepository.create(order)


    expect(inMemoryOrderRepository.orders[0]).toEqual(order);
    expect(inMemoryOrderRepository.orders).toHaveLength(1);
  });
})
import { InMemoryCustomerRepository } from '../repository/in-memory/in-memory-customer.repository';
import { Customer } from './customer';

describe('Customer unit tests', () => {
  let inMemoryCustomersRepository: InMemoryCustomerRepository;

  beforeEach(() => {
    inMemoryCustomersRepository = new InMemoryCustomerRepository();
  });

  it('should be create a customer', () => {
    const customer = new Customer('Customer 1', '786.786.586-89', 18);

    inMemoryCustomersRepository.create(customer);

    expect(inMemoryCustomersRepository.customers[0]).toEqual(customer);
    expect(inMemoryCustomersRepository.customers).toHaveLength(1);
  });
});

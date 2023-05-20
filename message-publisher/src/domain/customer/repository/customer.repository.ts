import { Customer } from '../entity/customer';

export abstract class CustomerRepository {
  abstract create(customer: Customer): Promise<void>;
  abstract findById(id: string): Promise<Customer>
}

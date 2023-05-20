import { Customer } from "../../entity/customer";
import { CustomerRepository } from "../customer.repository";

export class InMemoryCustomerRepository implements CustomerRepository {
  
  customers: Customer[] = [];

  async create(customer: Customer): Promise<void> {
    this.customers.push(customer);
  }

  async findById(id: string): Promise<Customer> {
    const customer = this.customers.find(customer => customer.id === id);

    return customer
  }
}

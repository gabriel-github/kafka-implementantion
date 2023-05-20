import { Injectable } from "@nestjs/common";
import { Customer } from "../entity/customer";
import { CustomerRepository } from "../repository/customer.repository";

interface Request {
  name: string,
  cpf: string,
  age: number,
}

@Injectable()
export class CreateCustomer {
  constructor(private customerRepository: CustomerRepository) {}

  async execute({name, cpf, age}: Request) {
    try {

      const customer = new Customer(name, cpf, age)
      await this.customerRepository.create(customer)
    } catch(err) {
      console.log(err)
    }
  }
}
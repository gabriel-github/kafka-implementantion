import { Injectable } from '@nestjs/common';
import { Customer } from 'src/domain/customer/entity/customer';
import { CustomerRepository } from 'src/domain/customer/repository/customer.repository';
import { PrismaService } from '../prisma.service';


@Injectable()
export class PrismaCustomerRepository implements CustomerRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Customer> {
     const customerPrisma = await this.prisma.customer.findFirst({
      where: {
        id
      }
    })

    const customer = new Customer(customerPrisma.name, customerPrisma.cpf, customerPrisma.age, customerPrisma.id)

    return customer
  }

  async create(customer: Customer): Promise<void> {
    await this.prisma.customer.create({
      data: {
        id: customer.id,
        name: customer.name,
        cpf: customer.cpf,
        age: customer.age,
      }
    })
  }

}
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCustomer } from 'src/domain/customer/use-cases/create-customer';
import { CreateProduct } from 'src/domain/product/use-cases/create-product';

@Controller('/customer')
export class CustomerController {
  constructor(private createCustomer: CreateCustomer) {}

  @Post('/create')
  async create(@Body() body: any) {
    const {name, cpf, age} = body;

    return await this.createCustomer.execute({name, cpf, age})
  }
}

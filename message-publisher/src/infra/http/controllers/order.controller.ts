import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrder } from 'src/domain/checkout/use-cases/create-order';

@Controller('/order')
export class OrderController {
  constructor(private createOrder: CreateOrder) {}

  @Post('/create')
  async create(@Body() body: any) {
    const {customerId, items} = body;

    return await this.createOrder.execute({customerId, items})
  }
}

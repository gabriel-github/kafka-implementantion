import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProduct } from 'src/domain/product/use-cases/create-product';

@Controller('/product')
export class ProductController {
  constructor(private createProduct: CreateProduct) {}

  @Post('/create')
  async create(@Body() body: any) {
    const { name, price} = body;

    return await this.createProduct.execute({name, price})
  }
}

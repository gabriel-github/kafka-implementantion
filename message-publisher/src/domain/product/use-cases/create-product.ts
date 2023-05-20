import { Injectable } from "@nestjs/common";
import { Product } from 'src/domain/product/entity/product';
import { ProductRepository } from "../repository/product.repository";

interface Request {
  name: string;
  price: number;
}

@Injectable()
export class CreateProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute({name, price}: Request) {
    try {
      const product = new Product(name, price)
      
      await this.productRepository.create(product)
    } catch(err) {
      console.log(err)
    }
  }
}
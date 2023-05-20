import { Product } from 'src/domain/product/entity/product';
import { ProductRepository } from './../../../../domain/product/repository/product.repository';
import { PrismaService } from '../prisma.service';
import {  Injectable } from '@nestjs/common'


@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(product: Product): Promise<void> {
    await this.prisma.product.create({
      data: {
        id: product.id,
        name: product.name,
        price: product.price,
      }
    })
  }

}
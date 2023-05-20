import { ProductRepository } from './../../domain/product/repository/product.repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaProductRepository } from './prisma/repositories/product.repository';
import { CustomerRepository } from 'src/domain/customer/repository/customer.repository';
import { PrismaCustomerRepository } from './prisma/repositories/customer.repository';
import { OrderRepository } from 'src/domain/checkout/repository/order.repository';
import { PrismaOrderRepository } from './prisma/repositories/order.repository';

@Module({
  imports: [],
  providers: [
    PrismaService,
    { provide: ProductRepository, useClass: PrismaProductRepository },
    { provide: CustomerRepository, useClass: PrismaCustomerRepository },
    { provide: OrderRepository, useClass: PrismaOrderRepository }
  ],
  exports: [ProductRepository, CustomerRepository, OrderRepository]
})
export class DatabaseModule { }

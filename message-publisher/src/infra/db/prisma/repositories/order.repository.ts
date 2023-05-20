import { Injectable } from '@nestjs/common';
import { Order } from 'src/domain/checkout/entity/order';
import { OrderRepository } from 'src/domain/checkout/repository/order.repository';
import { PrismaService } from '../prisma.service';


@Injectable()
export class PrismaOrderRepository implements OrderRepository {
  constructor(private prisma: PrismaService) {}

  async create(order: Order): Promise<void> {
    const productIds = order.items.map((item) => item.id);

    try {

        const createdOrder = await this.prisma.order.create({
          data: {
            id: order.id,
            total: order.totalPrice(),
            customerId: order.customerId,
          },
        });

        console.log(productIds)
  
        await this.prisma.orderToProduct.createMany({
          data: productIds.map((productId) => ({
            orderId: createdOrder.id,
            productId,
          })),
        });

      console.log('Order created successfully.');
    } catch(err) {
      console.log('Não foi possivel gerar a order')

      console.log(err)
    }

    
  }

}
import { Order } from '../../entity/order';
import { OrderRepository } from './../order.repository';



export class InMemoryOrderRepository implements OrderRepository {
  orders: Order[] = [];

  async create(order: Order): Promise<void> {
    this.orders.push(order)
  }
}
import { Order } from './../entity/order';


export abstract class OrderRepository {
  abstract create(order: Order): Promise<void>;
}
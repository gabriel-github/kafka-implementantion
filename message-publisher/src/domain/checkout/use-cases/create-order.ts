import { Injectable } from "@nestjs/common";
import { Order } from "../entity/order";
import { OrderRepository } from "../repository/order.repository";
import { Product } from "src/domain/product/entity/product";
import { MessagingAdapter } from "src/infra/@shared/adapters/messaging-adapter";
import { CustomerRepository } from "src/domain/customer/repository/customer.repository";

interface Request {
  customerId: string,
  items: {
    id: string,
    name: string,
    price: number
  }[]
}

@Injectable()
export class CreateOrder {
  constructor(private orderRepository: OrderRepository, private messagingAdapter: MessagingAdapter, private customerRepository: CustomerRepository) {}

  async execute({customerId, items}: Request) {
    try {
      const itemsProducts = items.map(item => {
        return new Product(item.name, item.price, item.id)
      })

      const order = new Order(customerId, itemsProducts)
      
      await this.orderRepository.create(order);

      const customer = await this.customerRepository.findById(customerId)

      await this.messagingAdapter.sendMessage('purchases.new-purchase', {
        product: items,
        customer: {
          customerId: customerId,
          name: customer.name,
          cpf: customer.cpf,
        },
        purchaseId: order.id,
      })
    } catch(err) {
      console.log(err)
    }
  }
}
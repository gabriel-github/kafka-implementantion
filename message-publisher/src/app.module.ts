import { MessagingAdapter } from './infra/@shared/adapters/messaging-adapter';
import { Module } from '@nestjs/common';
import { ProductController } from './infra/http/controllers/product.controller';
import { CreateProduct } from './domain/product/use-cases/create-product';
import { DatabaseModule } from './infra/db/database.module';
import { CustomerController } from './infra/http/controllers/customer.controller';
import { CreateCustomer } from './domain/customer/use-cases/create-customer';
import { CreateOrder } from './domain/checkout/use-cases/create-order';
import { OrderController } from './infra/http/controllers/order.controller';
import { KafkaMessagingAdapter } from './infra/massaging/kafka/adapters/kafka-messaging-adapter';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController, CustomerController, OrderController],
  providers: [CreateProduct, CreateCustomer, CreateOrder, {provide: MessagingAdapter, useClass: KafkaMessagingAdapter }],
})
export class AppModule {}

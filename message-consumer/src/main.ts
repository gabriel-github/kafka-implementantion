import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { main } from './infra/messaging';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
  main()
    .then(() => {
      console.log('[Invoice] Listening to Kafka messages');
    })
    .catch((err) => {
      console.log(err);
    });
}
bootstrap();

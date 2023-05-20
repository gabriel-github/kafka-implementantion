import { Module } from '@nestjs/common';
import { ProcessInvoiceController } from './infra/http/controllers/process-invoice.controller';
import { ProcessInvoice } from './domain/invoice/use-cases/process-invoice';

@Module({
  imports: [],
  controllers: [ProcessInvoiceController],
  providers: [ProcessInvoice],
})
export class AppModule {}

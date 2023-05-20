import { Body, Controller, Post } from '@nestjs/common';
import { ProcessInvoice } from 'src/domain/invoice/use-cases/process-invoice';

@Controller('/invoice')
export class ProcessInvoiceController {
  constructor(private processInvoice: ProcessInvoice) {}

  @Post('/process')
  async process(@Body() body: any) {
    const { id, customer } = body;

    return this.processInvoice.execute({ id, customer });
  }
}

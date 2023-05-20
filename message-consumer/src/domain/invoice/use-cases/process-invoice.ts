import { Injectable } from '@nestjs/common';

interface Request {
  id: string;
  customer: string;
}

@Injectable()
export class ProcessInvoice {
  async execute({ id, customer }: Request) {
    return `Ordem do cliente ${customer} foi processada`;
  }
}

import 'dotenv/config';

import { kafka } from './kafka/kafka';

interface PurchasesNewPurchaseMessage {
  product: {
    id: string;
    name: string;
    price: number;
  }[];
  customer: {
    customerId: string;
  };
  purchaseId: string;
}

export async function main() {
  const consumer = kafka.consumer({
    groupId: 'invoice-group',
    allowAutoTopicCreation: true,
  });

  await consumer.connect();
  await consumer.subscribe({ topic: 'purchases.new-purchase' });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const purchaseJSON = message.value?.toString();

      if (!purchaseJSON) {
        return;
      }

      const purchase: PurchasesNewPurchaseMessage = JSON.parse(purchaseJSON);

      console.log(`[Invoice] \n user ${JSON.stringify(purchase, null, 4)}`);
    },
  });
}

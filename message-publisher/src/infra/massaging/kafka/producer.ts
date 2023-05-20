import { kafka } from "./kafka"

export const producer = kafka.producer({
  allowAutoTopicCreation: true,
})

producer.connect().then(() => {
  console.log('[Purchases] Kafka producer connected');
}).catch(err => console.log('Erro ao conectar producer purchases'))
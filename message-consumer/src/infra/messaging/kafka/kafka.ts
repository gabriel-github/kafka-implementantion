import { Kafka } from 'kafkajs';
import 'dotenv/config';

if (!process.env.KAFKA_BROKER) {
  throw new Error('Kafka broker address not set!');
}

export const kafka = new Kafka({
  clientId: 'purchases',
  brokers: ['localhost:9092'],
});

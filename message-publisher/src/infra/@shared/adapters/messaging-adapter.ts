export abstract class MessagingAdapter {
  abstract sendMessage(topic: string, message: any): Promise<void>;
}
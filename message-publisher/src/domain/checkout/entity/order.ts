import { Product } from "src/domain/product/entity/product";
import {v4 as uuid} from 'uuid'


export class Order {
  private _id: string;
  private _customerId: string;
  private _items: Product[] = [];
  private _total: number

  constructor(customerId: string, items: Product[]) {
    this._id = uuid(),
    this._customerId = customerId,
    this._items = items
    this.total()
  }

  total() {
    this._total = this._items.reduce((acc, item) => acc + item.price, 0)
  }

  totalPrice(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0)
  }

  get id(): string {
    return this._id
  }

  get customerId(): string {
    return this._customerId
  }

  get items() {
    return this._items
  }
}
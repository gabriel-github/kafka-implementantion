import {v4 as uuid} from 'uuid'


export class Product {
  private _id: string;
  private _name: string;
  private _price: number;

  constructor(name: string, price: number, id?: string) {
    this._id = id ? id : uuid(),
    this._name = name,
    this._price = price
  }

  get id() {
    return this._id
  }

  get price() {
    return this._price
  }

  get name() {
    return this._name;
  }
}
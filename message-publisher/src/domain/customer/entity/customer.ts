import {v4 as uuid} from 'uuid'


export class Customer {
  private _id: string;
  private _name: string;
  private _cpf: string;
  private _age: number;

  constructor(name: string, cpf: string, age: number, id?: string) {
    this._id = id ? id: uuid();
    this._name = name;
    this._cpf = cpf;
    this._age = age;
  }

  get id() {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get age(): number {
    return this._age
  }

  get cpf(): string {
    return this._cpf
  }
}

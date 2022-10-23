import { AbstractEntity } from '../../common/abstract.entity';
import { Entity } from 'typeorm';

@Entity()
export class User extends AbstractEntity {
  constructor(email: string, password: string) {
    super();
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  private _email: string;
  private _password: string;
}

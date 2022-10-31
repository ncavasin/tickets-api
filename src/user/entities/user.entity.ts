import { AbstractEntity } from '../../common/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends AbstractEntity {
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

  @Column({ length: 255, name: 'email' })
  private _email: string;
  @Column({ length: 255, name: 'password' })
  private _password: string;
}

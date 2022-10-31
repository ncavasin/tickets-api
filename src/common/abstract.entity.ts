import {
  BaseEntity,
  CreateDateColumn,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class AbstractEntity extends BaseEntity {
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  @PrimaryGeneratedColumn({ name: 'id' })
  @Generated('uuid')
  protected _id: string;
  @CreateDateColumn({ name: 'created_at' })
  protected _createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  protected _updatedAt: Date;
}

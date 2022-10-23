import { AbstractEntity } from '../../shared/abstract.entity';
import { TrackableEntity } from '../../shared/trackable.entity';

export class User extends AbstractEntity implements TrackableEntity {
  private email: string;
  private password: string;
  createdAt: Date;
  updatedAt: Date;
}

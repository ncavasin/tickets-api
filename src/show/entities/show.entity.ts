import { AbstractEntity } from '../../shared/abstract.entity';
import { TrackableEntity } from '../../shared/trackable.entity';

export class Show extends AbstractEntity implements TrackableEntity {
  createdAt: Date;
  updatedAt: Date;
}

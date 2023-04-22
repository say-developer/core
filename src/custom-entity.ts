import {Entity} from '@loopback/repository';
import {CustomEntityMixin} from './mixins/custom-entity.mixin';

export class CustomEntity extends CustomEntityMixin(Entity) {
  constructor(data?: Partial<CustomEntity>) {
    super(data);
  }
}

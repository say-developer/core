import {MixinTarget} from '@loopback/core';
import {Model, model, property} from '@loopback/repository';
import {CustomEntityStructure} from '../types';

export function CustomEntityMixin<T extends MixinTarget<Model>>(baseClass: T) {
  @model()
  class CustomModel extends baseClass implements CustomEntityStructure {
    @property({
      type: 'string',
      id: true,
      generated: true,
      postgresql: {
        dataType: 'uuid',
      },
    })
    id: string;

    @property({
      type: 'date',
      defaultFn: 'now',
    })
    createdAt: string;

    @property({
      type: 'date',
      defaultFn: 'now',
    })
    updatedAt: string;
  }

  return CustomModel;
}

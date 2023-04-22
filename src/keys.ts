import {BindingKey, CoreBindings} from '@loopback/core';
import {CoreComponent} from './component';

/**
 * Binding keys used by this component.
 */
export namespace CoreComponentBindings {
  export const COMPONENT = BindingKey.create<CoreComponent>(
    `${CoreBindings.COMPONENTS}.CoreComponent`,
  );
}

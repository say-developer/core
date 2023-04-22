import {
  Application,
  Component,
  ContextTags,
  CoreBindings,
  config,
  inject,
  injectable,
} from '@loopback/core';
import {CoreComponentBindings} from './keys';
import {CoreComponentOptions, DEFAULT_CORE_OPTIONS} from './types';

// Configure the binding for CoreComponent
@injectable({tags: {[ContextTags.KEY]: CoreComponentBindings.COMPONENT}})
export class CoreComponent implements Component {
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: Application,
    @config()
    private options: CoreComponentOptions = DEFAULT_CORE_OPTIONS,
  ) {}
}

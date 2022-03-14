// import 'reflect-metadata';

interface Type<T> {
  new (...args: any[]): T;
}

export type GenericClassDecorator<T> = (target: T) => void;

export const Injectable = (): GenericClassDecorator<Type<object>> => {
  return (target: Type<object>) => {
    // console.log(
    //   '[Injectable]',
    //   target.name,
    //   Reflect.getMetadata('design:paramtypes', target)
    // );
  };
};

/**
 * Simple Implementation of injector
 */
// export const Injector = new (class {
//   resolve<T>(target: Type<any>, providers?): T {
//     console.log(providers);
//     let tokens = Reflect.getMetadata('design:paramtypes', target) || [];

//     console.log('[Injector]', tokens);

//     let injections = tokens.map((token) => Injector.resolve<any>(token));
//     return new target(...injections);
//   }
// })();

export interface Provider {
  provide: any;
  useClass: any;
}

export type Providers = Provider[];

/**
 * Same implementation, but with providers support
 *
 */
export const Injector = new (class {
  resolve<T>(target: Type<any>, providers: Providers = []): T {
    let tokens = Reflect.getMetadata('design:paramtypes', target) || [];

    let injections = tokens.map((token) =>
      Injector.resolve<any>(token, providers)
    );

    let provider = providers.find((p) => p.provide.name === target.name);
    if (provider) {
      return new provider.useClass(...injections);
    }

    return new target(...injections);
  }
})();

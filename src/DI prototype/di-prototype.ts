class UserService {
  sayHi() {
    console.log('hello');
  }
}

class Component {
  constructor(public userService: UserService) {}
}

// Angular DI

class Injector {
  private _container = new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach((service) =>
      this._container.set(service, new service())
    );
  }

  get(service: any) {
    const serviceInstance = this._container.get(service);
    if (!serviceInstance) {
      throw Error('No provider found');
    }
    return serviceInstance;
  }
}

// Somewhere in the Angular Application

const injector = new Injector([UserService]);
// In angular, this happens when we use __providers__ property in NgModule or Directive or Component
// Also, when use __providedIn__ property in @Injectable() Decorator.

//When Angular creates a Component it does something like below:
const component = new Component(injector.get(UserService));

component.userService.sayHi();

// Singleton Pattern

let instance;
let visitCount = 0;

class Visit {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return visitCount;
  }

  increment() {
    return ++visitCount;
  }
}

const singletonVisitCounter = Object.freeze(new Visit());
//const singletonVisitCounter2 = Object.freeze(new Visit()); // will throw error "You can only create one instance!"

module.exports = singletonVisitCounter;

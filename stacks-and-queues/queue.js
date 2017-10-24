export default class {
    constructor(seedData) {
        this.data = [];
        if (seedData) {
          for (const datum of seedData) {
            this.enqueue(datum);
          }
        }
    }
    enqueue(item) {
    }
    dequeue() {
    }
    peek() {
    }
    clear() {
    }
}

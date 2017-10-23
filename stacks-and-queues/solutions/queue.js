export default class {
    constructor(iterable) {
        this.data = [];
        if (iterable) {
            for (const item of iterable) {
                this.enqueue(item);
            }
        }
    }
    enqueue(item) {
        this.data.push(item);
        return this;
    }
    dequeue() {
        return this.data.shift();
    }
    peek() {
        return this.data[0];
    }
    clear() {
        this.data = [];
    }
}

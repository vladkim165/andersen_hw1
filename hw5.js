// Task 1
Array.prototype.myFilter = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    const el = this[i];
    if (callback(el, i, this)) {
      res.push(el);
    };
  };
  return res;
};

// Task 2
class Calculator {
  constructor(x, y) {
    if (!x || !y || typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Невалидные вводные данные');
    }
    this.x = x;
    this.y = y;
  }

  setX = (number) => {
    if (!number || typeof number !== 'number') {
      throw new Error('Невалидное число');
    }
    this.x = number;
  };

  setY = (number) => {
    if (!number || typeof number !== 'number') {
      throw new Error('Невалидное число');
    }
    this.y = number;
  };

  logSum = () => {
    console.log(this.x + this.y);
  };

  logMul = () => {
    console.log(this.x * this.y);
  };

  logSub = () => {
    console.log(this.x - this.y);
  };

  logDiv = () => {
    if (this.y === 0) {
      throw new Error('На ноль делить нельзя');
    }
    console.log(this.x / this.y);
  };
}

// Task 3 
class Stack {
  constructor(_limit = 10) {
    this._data = [];
    this._limit = _limit;
    this._index = 0;
  }

  push(element) {
    if (this._index >= this._limit) {
      throw new Error('Стэк переполнен');
    }
    this._data[this._index] = element;
    this._index = this._index + 1;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Стэк пуст');
    }
    this._index = this._index - 1;
    return this._data.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this._data[this._index - 1];
  }

  isEmpty() {
    return this._index === 0;
  }

  toArray() {
    return this._data;
  }

  [Symbol.toPrimitive]() {
    return String(this.toArray());
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error('Сущность не является итерируемой');
    }

    const iterableStack = new Stack(iterable.length);

    for (let elem of iterable) {
      iterableStack.push(elem);
    }

    return iterableStack;
  }
}

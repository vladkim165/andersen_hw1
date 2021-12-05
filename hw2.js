// Task 1
const makeObjectDeepCopy = obj => {
  if (obj === null || typeof obj !== 'object') {
    return null;
  }
  let copy = {};
  let keys = Object.keys(obj);

  for (let key of keys) {
    typeof obj[key] === 'object' ? copy[key] = makeObjectDeepCopy(obj[key]) : copy[key] = obj[key];
  }

  return Array.isArray(obj) ? (copy.length = obj.length) && Array.from(copy) : copy;
};

// Task 2
const selectFromInterval = (arr, firstValue = 0, secondValue = 0) => {
  if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number') || typeof firstValue != 'number' || typeof secondValue != 'number') {
    throw new Error('Invalid arguments');
  }

  return firstValue <= secondValue ?
    arr.filter(item => item >= firstValue && item <= secondValue)
    :
    arr.filter(item => item <= firstValue && item >= secondValue);
};

// Task 3
const myIterable = {};
myIterable[Symbol.iterator] = function () {
  if (!Number.isInteger(this.from) || !Number.isInteger(this.to)) {
    throw new Error('From or to are not numbers');
  }
  if (this.from > this.to) {
    throw new Error('To is less than from');
  }
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      }
      return { done: true };
    }
  };
};
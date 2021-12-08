// Task 3

const concatStrings = (str, separator = '') => {
  let res = str;
  let continueConcat = true;
  const stringSeparator = typeof separator === 'string' ? separator : '';
  if (typeof str !== 'string') {
    continueConcat = false;
  }
  const curry = (str2) => {
    if (typeof str2 === 'string' && continueConcat) {
      res += stringSeparator + str2;
    }
    else {
      continueConcat = false;
    }

    return curry;
  };

  curry[Symbol.toPrimitive] = () => typeof res === 'string' ? res : '';

  return curry;
};
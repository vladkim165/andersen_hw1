const createDebounceFunction = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
<<<<<<< HEAD
};

module.exports = createDebounceFunction;
=======
}
>>>>>>> 98cc2f640bee965931313d40798346d4c205efec

const firstButton = document.querySelector('.first-task');
const secondButton = document.querySelector('.second-task');
const resultNode = document.querySelector('.result');

const isNumber = () => {
  const firstString = prompt('Введите первое число', '');
  const secondString = prompt('Введите второе число', '');

  if (!firstString || !firstString.trim() || !secondString || !secondString.trim()) {
    alert('Какое-то из полей состоит только из пробелов или не имеет значения');
    return;
  }

  const firstNumber = Number(firstString);
  const secondNumber = Number(secondString);

  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
    alert('Некорректный ввод!');
    return;
  }
  return { firstNumber, secondNumber };
};

const firstTask = () => {
  try {
    const numbers = isNumber();
    if (typeof numbers === 'undefined') {
      return;
    }
    const result = Number(numbers.firstNumber).toString(numbers.secondNumber);
    alert(result);
    resultNode.textContent = result;
  } catch (err) {
    alert(`'Что-то пошло не так': ${err.message}`);
  }
};

const secondTask = () => {
  try {
    const numbers = isNumber();
    if (typeof numbers === 'undefined') {
      return;
    }
    const result = `${numbers.firstNumber + numbers.secondNumber}, ${numbers.firstNumber - numbers.secondNumber}`;
    alert(result);
    resultNode.textContent = result;
  } catch (err) {
    alert(`'Что-то пошло не так': ${err.message}`);
  }
};

firstButton.addEventListener('click', firstTask);
secondButton.addEventListener('click', secondTask);


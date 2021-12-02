const firstButton = document.querySelector('.first-task');
const secondButton = document.querySelector('.second-task');
const resultNode = document.querySelector('.result');

const isNumber = () => {
  const firstNumber = Number(prompt('Введите первое число', ''));
  const secondNumber = Number(prompt('Введите второе число', ''));
  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
    alert('Некорректный ввод!');
    return;
  }
  return { firstNumber, secondNumber };
};

const firstTask = () => {
  try {
    const numbers = isNumber();
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
    const result = `${numbers.firstNumber + numbers.secondNumber}, ${numbers.firstNumber - numbers.secondNumber}`;
    alert(result);
    resultNode.textContent = result;
  } catch (err) {
    alert(`'Что-то пошло не так': ${err.message}`);
  }
};

firstButton.addEventListener('click', firstTask);
secondButton.addEventListener('click', secondTask);


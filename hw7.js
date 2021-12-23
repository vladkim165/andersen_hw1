class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  set brand(val) {
    if (typeof val !== 'string' || val.length > 50) throw new Error('Неверный бренд');
    this.#brand = val;
  }
  get brand() {
    return this.#brand;
  }

  set model(val) {
    if (typeof val !== 'string' || val.length > 50) throw new Error('Неверная модель');
    this.#model = val;
  }
  get model() {
    return this.#model;
  }

  set yearOfManufacturing(val) {
    if (typeof val !== 'number' || val < 1900 || val > new Date().getFullYear()) throw new Error('Неверный год производства');
    this.#yearOfManufacturing = val;
  }
  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(val) {
    if (typeof val !== 'number' || val < 100 || val > 300) throw new Error('Неверная макс. скорость');
    this.#maxSpeed = val;
  }
  get maxSpeed() {
    return this.#maxSpeed;
  }


  set maxFuelVolume(val) {
    if (typeof val !== 'number' || val < 5 || val > 20) throw new Error('Неверная макс. вместимость бака');
    this.#maxFuelVolume = val;
  }
  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set fuelConsumption(val) {
    if (typeof val !== 'number') throw new Error('Неверное потребление топлива');
    this.#fuelConsumption = val;
  }
  get fuelConsumption() {
    return `${this.#fuelConsumption} л/км`;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start = () => {
    if (this.#isStarted) throw new Error('Машина уже заведена');
    this.#isStarted = true;
  };

  shutDownEngine = () => {
    if (!this.#isStarted) throw new Error('Машина ещё не заведена');
    this.#isStarted = false;
  };

  fillUpGasTank = (val) => {
    if (typeof val !== 'number' || val <= 0) throw new Error('Неверное количество топлива для заправки');
    if (this.#currentFuelVolume + val > this.#maxFuelVolume) throw new Error('Топливный бак переполнен');
    this.#currentFuelVolume += val;
  };

  drive = (speed, hours) => {
    if (typeof speed !== 'number' || speed <= 0) throw new Error('Неверная скорость');
    if (typeof hours !== 'number' || hours <= 0) throw new Error('Неверное количество часов');
    if (speed >= this.#maxSpeed) throw new Error('Машина не может ехать так быстро');
    if (!this.#isStarted) throw new Error('Машина должна быть заведена, чтобы ехать');
    const distance = speed * hours;
    const neededFuel = distance / 100 * this.#fuelConsumption;
    if (neededFuel > this.#currentFuelVolume) throw new Error('Недостаточно топлива');
    this.#currentFuelVolume -= neededFuel;
    this.#mileage += distance;
  };
}
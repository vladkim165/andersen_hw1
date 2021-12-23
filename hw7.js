class Car {
  #brand;
  #model;
  #yearOfManufacturing;

  set brand(val) {
    if (typeof val !== 'string' || val.length > 50) {
      throw new Error('Неверный бренд');
    }
    this.#brand = val;
  }

  get brand() {
    return this.#brand;
  }

  set model(val) {
    if (typeof val !== 'string' || val.length > 50) {
      throw new Error('Неверная модель');
    }
    this.#model = val;
  }

  get model() {
    return this.#model;
  }

  set yearOfManufacturing(val) {
    if (val < 1900 || val > new Date().getFullYear()) {
      throw new Error('Неверный год производства');
    }
    this.#yearOfManufacturing = val;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }
}
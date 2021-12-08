const { concatStrings } = require('./hw3');

describe('Возвращает строку переданных аргументов', () => {
  it('Тест 1', () => {
    expect(String(concatStrings('first')('second')('third')())).toBe('firstsecondthird');
  });
  it('Тест 2', () => {
    expect(String(concatStrings('first', null)('second')()('third'))).toBe('firstsecond');
  });
  it('Тест 3', () => {
    expect(String(concatStrings('first', '123')('second')('third')())).toBe('first123second123third');
  });
  it('Тест 4', () => {
    expect(String(concatStrings('some-value')('')('')(null))).toBe('some-value');
  });
  it('Тест 5', () => {
    expect(String(concatStrings('some-value')(2))).toBe('some-value');
  });
  it('Тест 6', () => {
    expect(String(concatStrings('some-value')('333')(123n)('end'))).toBe('some-value333');
  });
});

/* Тесты прошел
PASS ./hw3.test.js
  Возвращает строку переданных аргументов
    √ Тест 1 (2ms)
    √ Тест 2
    √ Тест 3 (1ms)
    √ Тест 4
    √ Тест 5
    √ Тест 6 (1ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.719s, estimated 2s
Ran all test suites.
*/
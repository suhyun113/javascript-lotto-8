import { LOTTO_MIN, LOTTO_MAX, LOTTO_SIZE } from "../constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (!Array.isArray(numbers) || numbers.length !== LOTTO_SIZE) {
      throw new Error("로또 번호는 6개여야 합니다.");
    }
    const isRange = (number) => Number.isInteger(number) && LOTTO_MIN <= number && number <= LOTTO_MAX;
    if (numbers.some(number => !isRange(number))) {
      throw new Error(`로또 번호는 ${LOTTO_MIN}부터 ${LOTTO_MAX} 사이의 숫자여야 합니다.`);
    }
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new Error("로또 번호는 중복될 수 없습니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;

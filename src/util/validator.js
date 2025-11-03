import { LOTTO_MIN, LOTTO_MAX, LOTTO_SIZE, LOTTO_PRICE } from "../constants.js";

const inRange = (number) => Number.isInteger(number) && LOTTO_MIN <= number && number <= LOTTO_MAX;

export const validateAmount = (amount) => {
    if (!Number.isInteger(amount)) {
        throw new Error("구입 금액은 숫자여야 합니다.");
    }
    if (amount < LOTTO_PRICE || amount % LOTTO_PRICE !== 0) {
        throw new Error("구입 금액은 1000원 단위여야 합니다.");
    }
    return amount;
}

export const validateWinningNumbers = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length !== LOTTO_SIZE) {
        throw new Error(`로또 번호는 ${LOTTO_MIN}개의 숫자여야 합니다.`);
    }
    if (numbers.some(number => !inRange(number))) {
        throw new Error(`로또 번호는 ${LOTTO_MIN}부터 ${LOTTO_MAX} 사이의 숫자여야 합니다.`);
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
        throw new Error("로또 번호는 중복될 수 없습니다.");
    }
    return numbers;
}

export const validateBonusNumber = (bonusNumber, winningNumbers) => {
    if (!inRange(bonusNumber)) {
        throw new Error(`보너스 번호는 ${LOTTO_MIN}부터 ${LOTTO_MAX} 사이의 숫자여야 합니다.`);
    }
    const winSet = new Set(winningNumbers);
    if (winSet.has(bonusNumber)) {
        throw new Error("보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
    return bonusNumber;
}
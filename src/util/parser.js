import { LOTTO_SIZE } from "../constants.js";

export function parseAmount(amountStr) {
    const amount = String(amountStr ?? "").trim();
    if (!/^\d+$/.test(amount)) {
        throw new Error("구입 금액은 숫자여야 합니다.");
    }
    return Number(amount);
}

export function parseWinningNumbers(numbersStr) {
    const tokens = String(numbersStr ?? "").trim().split(",").map(num => num.trim());
    if (tokens.length !== LOTTO_SIZE || tokens.some(token => !/^\d+$/.test(token))) {
        throw new Error(`당첨 번호는 쉼표로 구분된 ${LOTTO_SIZE}개의 숫자여야 합니다.`);
    }
    return tokens.map(Number);
}

export function parseBonusNumber(bonusStr) {
    const bonus = String(bonusStr ?? "").trim();
    if (!/^\d+$/.test(bonus)) {
        throw new Error("보너스 번호는 숫자여야 합니다.");
    }
    return Number(bonus);
}

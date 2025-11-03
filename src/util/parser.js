export function parseAmount(amountStr) {
    const amount = String(amountStr ?? "").trim();
    if (!/^\d+$/.test(amount)) {
        throw new Error("[Error] 구입 금액은 숫자여야 합니다.");
    }
    return Number(amount);
}

export function parseWinningNumbers(numbersStr) {
    const numbers = String(numbersStr ?? "").trim().split(",").map(num => num.trim());
    if (numbers.length !== 6 || !numbers.every(num => /^\d+$/.test(num))) {
        throw new Error("[Error] 당첨 번호는 쉼표로 구분된 6개의 숫자여야 합니다.");
    }
    return numbers.map(Number);
}

export function parseBonusNumber(bonusStr) {
    const bonus = String(bonusStr ?? "").trim();
    if (!/^\d+$/.test(bonus)) {
        throw new Error("[Error] 보너스 번호는 숫자여야 합니다.");
    }
    return Number(bonus);
}

import {MissionUtils} from '@woowacourse/mission-utils';
import { LOTTO_MIN, LOTTO_MAX, LOTTO_SIZE, LOTTO_PRICE, PRIZE } from "../constants.js";
import Lotto from "../domain/Lotto.js";

const sortAscending = (arr) => [...arr].sort((a, b) => a - b);

export const issueTickets = (amount) => {
    const count = amount / LOTTO_PRICE;
    const tickets = [];
    for (let i = 0; i < count; i += 1) {
        const numbers = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO_MIN, LOTTO_MAX, LOTTO_SIZE);
        tickets.push(new Lotto(sortAscending(numbers)));
    }
    return tickets;
};

export const matchCounter = (ticket, winningNumbers) => {
    const winSet = new Set(winningNumbers);
    let count = 0;
    for (const n of ticket) {
        if (winSet.has(n)) {
            count += 1;
        }
    }
    return count;
};

export const rankResolver = (ticketNumbers, winningNumbers, bonusNumber) => {
    const matchCount = matchCounter(ticketNumbers, winningNumbers);
    if (matchCount === 6) return 'FIRST';
    if (matchCount === 5 && ticketNumbers.includes(bonusNumber)) return 'SECOND';
    if (matchCount === 5) return 'THIRD';
    if (matchCount === 4) return 'FOURTH';
    if (matchCount === 3) return 'FIFTH';
    return 'NONE';
};
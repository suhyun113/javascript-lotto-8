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

const computeTotalPrize = (rankCounts) => {
    let total = 0;
    total += rankCounts.FIRST * PRIZE.FIRST;
    total += rankCounts.SECOND * PRIZE.SECOND;
    total += rankCounts.THIRD * PRIZE.THIRD;
    total += rankCounts.FOURTH * PRIZE.FOURTH;
    total += rankCounts.FIFTH * PRIZE.FIFTH;
    return total;
};

export const evaluate = (tickets, winningNumbers, bonusNumber) => {
    const rankCounts = { FIRST: 0, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 0};
    for (const ticket of tickets) {
        const rank = rankResolver(ticket.getNumbers(), winningNumbers, bonusNumber);
        if (rankCounts[rank] !== undefined) rankCounts[rank] += 1;
    }
    const totalPrize = computeTotalPrize(rankCounts);
    return { rankCounts, totalPrize };
};

export default { issueTickets, matchCounter, rankResolver, evaluate };
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
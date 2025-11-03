import {MissionUtils} from '@woowacourse/mission-utils';
import { LOTTO_MIN, LOTTO_MAX, LOTTO_SIZE, LOTTO_PRICE, PRIZE } from "../constants.js";
import Lotto from "../domain/Lotto.js";

const sortAscending = (arr) => [...arr].sort((a, b) => a - b);

export const issueTickets = (amount) => {
    const count = amount / LOTTO_PRICE;
    return Array.from({ length: count }, () => {
        const numbers = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO_MIN, LOTTO_MAX, LOTTO_SIZE);
        return new Lotto(sortAscending(numbers));
    });
};
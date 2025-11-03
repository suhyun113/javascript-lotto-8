import { MissionUtils } from '@woowacourse/mission-utils';
import { formatTicket, formatRate } from '../util/format.js';
import { RANK_LABEL } from '../constants.js';

export const printIssuedTickets = (tickets) => {
    MissionUtils.Console.print(`\n${tickets.length}개를 구매했습니다.`);
    for (const ticket of tickets) {
        MissionUtils.Console.print(formatTicket(ticket.getNumbers()));
    }
};

export const printEvaluationResults = (rankCounts, totalPrize, purchaseAmount) => {
    MissionUtils.Console.print('\n당첨 통계\n---');
    MissionUtils.Console.print(`${RANK_LABEL.FIRST} (${RANK_LABEL.FIRST}원) - ${rankCounts.FIRST}개`);
    MissionUtils.Console.print(`${RANK_LABEL.SECOND} (${RANK_LABEL.SECOND}원) - ${rankCounts.SECOND}개`);
    MissionUtils.Console.print(`${RANK_LABEL.THIRD} (${RANK_LABEL.THIRD}원) - ${rankCounts.THIRD}개`);
    MissionUtils.Console.print(`${RANK_LABEL.FOURTH} (${RANK_LABEL.FOURTH}원) - ${rankCounts.FOURTH}개`);
    MissionUtils.Console.print(`${RANK_LABEL.FIFTH} (${RANK_LABEL.FIFTH}원) - ${rankCounts.FIFTH}개`);
    const rate = (totalPrize / purchaseAmount) * 100;
    MissionUtils.Console.print(`총 수익률은 ${formatRate(rate)}입니다.`);
};
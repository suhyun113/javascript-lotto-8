import { MissionUtils } from '@woowacourse/mission-utils';
import { formatTicket, formatRate } from '../util/format.js';
import { RANK_LABEL } from '../constants.js';

const RANK_ORDER = ['FIFTH', 'FOURTH', 'THIRD', 'SECOND', 'FIRST'];

export const printIssuedTickets = (tickets) => {
    MissionUtils.Console.print(`\n${tickets.length}개를 구매했습니다.`);
    for (const ticket of tickets) {
        MissionUtils.Console.print(formatTicket(ticket.getNumbers()));
    }
};

export const printEvaluationResults = (rankCounts, totalPrize, purchaseAmount) => {
    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---');
    for (const r of RANK_ORDER) {
    let c = 0;
    if (rankCounts && rankCounts[r] !== undefined) {
      c = rankCounts[r];
    }
    MissionUtils.Console.print(`${RANK_LABEL[r]} - ${c}개`);
  }
  const rate = (totalPrize / purchaseAmount) * 100;
  MissionUtils.Console.print(`총 수익률은 ${formatRate(rate)}입니다.`);
};
import { rankResolver, evaluate } from "../src/service/lottoService.js";
import Lotto from "../src/Lotto";
import { PRIZE } from "../src/constants.js";

describe("서비스 로직 테스트", () => {
  test("rankResolver: 5개 + 보너스 일치면 SECOND", () => {
    const ticket = new Lotto([1, 2, 3, 4, 5, 7]); // 보너스 7 포함
    const winning = [1, 2, 3, 4, 5, 6];
    const bonus = 7;
    const rank = rankResolver(ticket.getNumbers(), winning, bonus);
    expect(rank).toBe("SECOND");
  });

  test("evaluate: 집계/상금 합계 계산", () => {
    const tickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),    // FIRST
      new Lotto([1, 2, 3, 4, 5, 7]),    // SECOND (보너스 7)
      new Lotto([1, 2, 3, 4, 10, 11]),  // FOURTH
      new Lotto([1, 2, 3, 20, 21, 22]), // FIFTH
      new Lotto([40, 41, 42, 43, 44, 45]), // NONE
    ];
    const winning = [1, 2, 3, 4, 5, 6];
    const bonus = 7;

    const { counts, totalPrize } = evaluate(tickets, winning, bonus);

    expect(counts).toEqual({
      FIRST: 1,
      SECOND: 1,
      THIRD: 0,
      FOURTH: 1,
      FIFTH: 1,
    });

    const expected = PRIZE.FIRST + PRIZE.SECOND + PRIZE.FOURTH + PRIZE.FIFTH;
    expect(totalPrize).toBe(expected);
  });
});

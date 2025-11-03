import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("범위 밖(0 포함)이면 예외", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("범위 밖(46 포함)이면 예외", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("정수가 아니면(소수 포함) 예외", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6.5]);
    }).toThrow("[ERROR]");
  });

  test("정수가 아니면(문자열 포함) 예외", () => {
    expect(() => {
      // 문자열 '1' 포함 → 정수 아님 → 예외
      new Lotto(["1", 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("내부 저장은 오름차순으로 정렬된다.", () => {
    const lotto = new Lotto([6, 1, 3, 2, 5, 4]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("getNumbers는 불변성을 보장한다(복사본 반환).", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const arr = lotto.getNumbers();
    arr[0] = 999;
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("경계값 1과 45는 유효하다.", () => {
    expect(() => {
      new Lotto([1, 3, 10, 20, 30, 45]);
    }).not.toThrow();
  });

  test("로또 번호의 개수가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });
});

# javascript-lotto-precourse
# 3주차 - 로또

## ⚙️ 간단한 프로젝트 실행 흐름
1. 안내 문구를 출력한다.
2. 로또 구입 금액을 입력받아 검증한다.(1,000원 단위)
3. 구입 장수만큼 로또를 발행하고 오름차순으로 출력한다.
4. 당첨 번호(6개, 쉼표 구분)를 입력받아 검증한다.
5. 보너스 번호(1개)를 입력받아 검증한다.
6. 구매 로또 vs 담청 번호를 비교해 등수별 개수를 계산한다.
7. 총 수익률(소수점 둘째 자리 반올림)을 출력한다.
8. 게임을 종료한다.
(사용자가 잘못된 값을 입력할 경우 "[ERROR]로 시작하는 메시지와 함께 Error 발생 + 해당 메시지 출력 후 다음 해당 지점부터 다시 입력을 받는다.)


## ⚠️ 고려사항
- 로또 번호의 숫자 범위는 1~45이다.
- 로또 번호 6개와 보너스 번호 1개는 중복되지 않는다.
- 로또 구입 금액 입력 시, 그 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장 가격 : 1,000원


## 🔧 구현할 기능 목록
### 1. util
- parser(문자열 -> 자료형 변환)
    - [X] parseAmount : 구입 금액 문자열 -> 정수
    - [X] parseWinningNumbers : 로또 담청 번호 문자열 -> 정수 배열
    - [X] parseBonusNumber : 보너스 번호 문자열 -> 정수

- validator(입력 규칙 검증)
    - [X] validateAmount : 정수 여부, 1000원 단위, 최소 1000원
    - [X] validateWinningNumbers : 길이 6, 1~45, 중복 없음
    - [X] validateBonusNumber : 1~45, 당첨 번호와 중복 불가

- format(출력 포맷)
    - [X] formatTicket : `[1, 2, 5, 14, 22, 45]` 문자열화
    - [X] formatRate : 소수점 둘째 자리 반올림 퍼센트 `"62.5%"`


### 2. domain
- [X] Lotto 클래스 : 생성자에서 번호 검증
- [X] Ranks, Prizes 상수 : 등수 규칙 및 상금 테이블


### 3. service
- LottoService
    - [X] issueTickets : 금액 -> 정수 계산, Random Api 통한 티켓 발행
    - [X] matchCounter : 교집합 개수 판정
    - [X] rankResolver : 보너스 포함 판정
    - [ ] evaluate : 로또 번호 일치 개수 계산, 등수 판정, 집계 및 수익률 반환


### 4. io
- [ ] InputView
- [ ] OutputView
- [ ] 공통 에러 처리


### 5. App.js
- [ ] 모든 모듈 연동
- [ ] `App.run()` 실행 흐름 완성


### 6. test
- [ ] LottoTest.js : 테스트 코드 추가 및 테스트
- [ ] ApplicationTest.js : 테스트 코드 실행
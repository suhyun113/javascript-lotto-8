import { MissionUtils } from '@woowacourse/mission-utils';
import { parseAmount, parseWinningNumbers, parseBonusNumber } from "../util/parser.js";
import { validateAmoun, validateWinningNumbers, validateBonusNumber } from '../util/validator.js';
import { printError } from './error.js';

const ask = (question) => MissionUtils.Console.readLineAsync(question);

export const askPurchaseAmount = async () => {
    while (true) {
        try {
            const amountStr = await ask("구입금액을 입력해 주세요.\n");
            return validateAmount(parseAmount(amountStr));
        } catch (error) {
            printError(error);
        }
    }
};

export const askWinningNumbers = async () => {
    while (true) {
        try {
            const numbersStr = await ask("\n당첨 번호를 입력해 주세요.\n");
            return validateWinningNumbers(parseWinningNumbers(numbersStr));
        } catch (error) {
            printError(error);
        }
    }
};

export const askBonusNumber = async (winningNumbers) => {
    while (true) {
        try {
            const bonusStr = await ask("\n보너스 번호를 입력해 주세요.\n");
            return validateBonusNumber(parseBonusNumber(bonusStr), winningNumbers);
        } catch (error) {
            printError(error);
        }
    }
};
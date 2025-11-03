import { MissionUtils } from '@woowacourse/mission-utils';

export const printError = (error) => {
    let raw = error;
    if (raw === null || raw === undefined) {
        raw = "";
    }

    let msg;
    if (raw && typeof raw.message === 'string') {
        msg = raw.message;
    } else {
        msg = String(raw);
    }

    if (!msg.startsWith("[ERROR]")) {
        msg = `[ERROR] ${msg}`;
    }
    MissionUtils.Console.print(msg);
};
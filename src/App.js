import { askPurchaseAmount, askWinningNumbers, askBonusNumber} from "./io/inputView.js";
import { printIssuedTickets, printEvaluationResults } from "./io/outView.js";
import { issueTickets, evaluate } from "./service/lottoService.js";


class App {
  async run() {
    const amount = await askPurchaseAmount();
    const tickets = issueTickets(amount);
    printIssuedTickets(tickets);

    const winningNumbers = await askWinningNumbers();
    const bonusNumber = await askBonusNumber(winningNumbers);

    const { counts, totalPrize } = evaluate(tickets, winningNumbers, bonusNumber);
    printEvaluationResults(counts, totalPrize, amount);
  }
}

export default App;

require("dotenv/config");

const Telegram = require("telegram-node-bot");

const { TelegramBaseController } = Telegram;
const { TextCommand } = Telegram;
const chatbot = new Telegram.Telegram(process.env.TOKEN);
class KOTController extends TelegramBaseController {
  kotAction(scope) {
    const msg = [
      "KOT é muito ruim!",
      "Vai dar tudo certo... menos pra quem joga KOT!",
      "Eu ganhei em último lugar!!!"
    ];

    const index = Math.floor(Math.random() * Math.floor(msg.length));
    scope.sendMessage(msg[index]);
  }

  get routes() {
    return {
      kot: "kotAction"
    };
  }
}
chatbot.router.when(new TextCommand("/kot", "kot"), new KOTController());

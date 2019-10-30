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
      "Eu ganhei em último lugar!!!",
      "HOJE TINHA ENCONTRO??????? @Luiz",
      "KD o veneno?",
      "Sayuri está Sayurando",
      "OLHA A VELAAAAAAA 🕯️🕯️🕯️🕯️",
      "Pq manda audio, Aline?",
      "Vim lá do Tijucal só pra ganhar do Luiz"
    ];

    const index = Math.floor(Math.random() * Math.floor(msg.length));
    scope.sendMessage(msg[index]);
  }

  gitAction(scope) {
    const msg =
      "Contribua para este belíssimo projeto! https://github.com/CUBA-dev/cubabot";

    scope.sendMessage(msg);
  }

  get routes() {
    return {
      kot: "kotAction",
      git: "gitAction"
    };
  }
}
chatbot.router.when(new TextCommand("/kot", "kot"), new KOTController());
chatbot.router.when(new TextCommand("/git", "git"), new KOTController());

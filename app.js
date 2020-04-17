require("dotenv/config");

const Telegram = require("telegram-node-bot");

const { TelegramBaseController } = Telegram;
const { TextCommand } = Telegram;
const msg = [
  "KOT é muito ruim!",
  "Vai dar tudo certo... menos pra quem joga KOT!",
  "Eu ganhei em último lugar!!! 🏅",
  "HOJE TINHA ENCONTRO??????? @Luiz",
  "KD o veneno? 🥤 ",
  "Sayuri está Sayurando",
  "OLHA A VELAAAAAAA 🕯️ 🕯️ 🕯️ 🕯️!",
  "Pq manda audio, Alinne?",
  "Vim lá do Tijucal, só pra ganhar do Luiz",
  "Party Game bom é Party Game pegando fogo 🔥",
  "Jogar! Eu quero jogar!",
  "São quantos sacos de cimento esse BG?",
  "Minha jogatina é sagrada!",
  "Esse jogo é tipo War?",
  "Nem precisei sair do Tijucal pra ganhar do Luiz!",
  "Vou perder, a sorte não está comigo 😰😰😰 - Gustavo, 97 pontos de vitória.",
  "Não consigo te ouvir aqui do terceiro lugar ¯\\_(ツ)_/¯",
  "GURPS é ruim demais!",
  "Sayuri não TEM competência pra jogar GURPS",
  "Gustavo tá gustavando."
];

const chatbot = new Telegram.Telegram(process.env.TOKEN);
class KOTController extends TelegramBaseController {
  kotAction(scope) {
    const index = Math.floor(Math.random() * Math.floor(msg.length));
    scope.sendMessage(msg[index]);
  }

  AllKotAction(scope) {
    scope.sendMessage(`**Todas as mensagens de CUBA:** \n ${msg.join(" \n")}`);
  }

  gitAction(scope) {
    scope.sendMessage(
      "Contribua para este belíssimo projeto! https://github.com/CUBA-dev/cubabot"
    );
  }

  quintaSerieAction(scope) {
    scope.sendMessage("Ahhhh não, eu não deixavaaaaa 😨😨😨😨");
  }

  companheirosAction(scope) {
    scope.sendMessage(
      "ATENÇÃO COMPANHEIRAS E COMPANHEIROS! @ThaisBueno @GustavoJJPrado @AlinneBarrozo @SayuriArake @636091213 (Luiz Godinho) @598709123 (Denys Aurélio) "
    );
  }

  get routes() {
    return {
      kot: "kotAction",
      all: "AllKotAction",
      git: "gitAction",
      quintaserie: "quintaSerieAction",
      companheiros: "companheirosAction"
    };
  }
}
chatbot.router.when(new TextCommand("/kot", "kot"), new KOTController());
chatbot.router.when(new TextCommand("/all", "all"), new KOTController());
chatbot.router.when(new TextCommand("/git", "git"), new KOTController());
chatbot.router.when(
  new TextCommand("/5serie", "quintaserie"),
  new KOTController()
);
chatbot.router.when(
  new TextCommand("/companheiros", "companheiros"),
  new KOTController()
);

// https://github.com/everyone-bot/everyone-bot

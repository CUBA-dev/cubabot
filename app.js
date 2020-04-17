require("dotenv/config");

const Telegram = require("telegram-node-bot");

const { TelegramBaseController } = Telegram;
const { TextCommand } = Telegram;
const msg = [
  "KOT é muito ruim!",
  "Vai dar tudo certo... menos pra quem joga KOT!",
  "Eu ganhei em último lugar!!! 🏅",
  "HOJE TINHA ENCONTRO??????? @LuizGodinho",
  "KD o veneno? 🥤",
  "@SayuriArake está Sayurando ⏰⏰⏰",
  "OLHA A VELAAAAAAA 🕯️ 🕯️ 🕯️ 🕯️!",
  "Pq manda audio, @AlinneBarrozo?",
  "@ThaisBueno veio lá do Tijucal, só pra ganhar do @LuizGodinho",
  "Party Game bom é Party Game pegando fogo 🔥",
  "Jogar! Eu quero jogar!",
  "São quantos sacos de cimento esse BG?",
  "Minha jogatina é sagrada!",
  "Esse jogo é tipo War?",
  "Nem precisei sair do Tijucal pra ganhar do @LuizGodinho!",
  "Vou perder, a sorte não está comigo 😰😰😰 - @GustavoJJPrado, 97 pontos de vitória.",
  "Não consigo te ouvir aqui do terceiro lugar ¯\\_(ツ)_/¯",
  "@GustavoJJPrado tá Gustavando...",
  "Esperando o @denysaurelio vir jogar com a gente: 💀💀💀💀💀💀💀",
  "@LuizGodinho está há 0 dias sem comprar boardgames. O seu record é de 2 dias. 💸💸💸"
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
      "ATENÇÃO COMPANHEIRAS E COMPANHEIROS! @ThaisBueno @GustavoJJPrado @AlinneBarrozo @SayuriArake @LuizGodinho @denysaurelio"
    );
  }

  gustavandoAction(scope) {
    scope.sendMessage("@GustavoJJPrado tá Gustavando...");
  }

  sayurandoAction(scope) {
    scope.sendMessage("@SayuriArake está Sayurando ⏰⏰⏰");
  }

  alinneAction(scope) {
    scope.sendMessage("Pq manda áudio, @AlinneBarrozo? 🎙🎙🎙");
  }

  denysAction(scope) {
    scope.sendMessage(
      "Esperando o @denysaurelio vir jogar com a gente: 💀💀💀💀💀💀💀"
    );
  }

  luizAction(scope) {
    scope.sendMessage(
      "@LuizGodinho está há 0 dias sem comprar boardgames. O seu record é de 02 dias. 💸💸💸"
    );
  }

  thaisAction(scope) {
    scope.sendMessage("@ThaisBueno está com sono às 19 horas 😴😴😴😴");
  }

  corongaAction(scope) {
    scope.sendMessage(
      "Nem precisei sair de casa pra ganhar do @LuizGodinho! 💻💻💻"
    );
  }

  get routes() {
    return {
      kot: "kotAction",
      all: "AllKotAction",
      git: "gitAction",
      quintaserie: "quintaSerieAction",
      companheiros: "companheirosAction",
      gustavando: "gustavandoAction",
      sayurando: "sayurandoAction",
      alinne: "alinneAction",
      denys: "denysAction",
      luiz: "luizAction",
      thais: "thaisAction",
      coronga: "corongaAction"
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
chatbot.router.when(
  new TextCommand("/gustavando", "gustavando"),
  new KOTController()
);
chatbot.router.when(
  new TextCommand("/sayurando", "sayurando"),
  new KOTController()
);
chatbot.router.when(new TextCommand("/alinne", "alinne"), new KOTController());
chatbot.router.when(new TextCommand("/denys", "denys"), new KOTController());
chatbot.router.when(new TextCommand("/luiz", "luiz"), new KOTController());
chatbot.router.when(new TextCommand("/thais", "thais"), new KOTController());
chatbot.router.when(
  new TextCommand("/coronga", "coronga"),
  new KOTController()
);

// https://www.sitepoint.com/how-to-build-your-first-telegram-chatbot-with-node-js/
// https://github.com/everyone-bot/everyone-bot

/*
Bot Father


kot - Frases de CUBA
git - Repositório deste projeto maravilhoso
all - Lista de frases completa.
5serie - Reações maduras dos membros de CUBA
companheiros - chame a galera
gustavando - reação para quando o gustavo reclama que vai perder no jogo, ou seja, todo jogo.
sayurando - reação para quando a sayuri está demorando pra jogar
alinne - reação para quando a alinne manda áudio
denys - reação para quando faz muito tempo que o denys não joga com a gente, ou seja, sempre.
luiz - reação para quando o luiz diz que comprou um novo jogo
thais - reação pra quando thais tá com sono
coronga - reação para jogatinas online

*/

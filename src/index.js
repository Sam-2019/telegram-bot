import express from "express";
import { Telegraf, Telegram } from "telegraf";
import * as dotenv from "dotenv/config";
import { TOKEN, PORT } from "./config.js";

const { reply, fork } = Telegraf;

const bot = new Telegraf(TOKEN);
bot.launch();
// bot.use(Telegraf.log());

const sayYoMiddleware = fork((ctx) => ctx.reply("yo"));

bot.start((ctx) => {
  ctx.reply("Hello " + ctx.from.first_name + "!");
});

bot.help((ctx) => {
  ctx.reply("Send /start to receive a greeting");
  ctx.reply("Send /keyboard to receive a message with a keyboard");
  ctx.reply("Send /quit to stop the bot");
});

bot.command("quit", (ctx) => {
  ctx.reply("Session ended");
});

bot.command("getMember", (ctx) => {
  const data = ctx.message.text.slice(11);
  // console.log(data);
  // ctx.reply("Enter member's name");
  // console.log(ctx.message.text);
});

//regex
let trxn_id_pattern = /\d{11}/g;
let amount_pattern =
  /GHS ?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9].[0-9][0-9]/g;

const withdrawal = (data) => {
  console.log(data);
};

const receipt = (data) => {
  console.log({ Receipt: data });
  let amounts = data.match(amount_pattern);
  let receipt_amount = amounts[0];
  let current_balance = amounts[1];
  let available_amount = amounts[2];
  let trnx_id = data.match(trxn_id_pattern);

  console.log({ receipt_amount: receipt_amount });
  console.log({ current_balance: current_balance });
  console.log({ available_amount: available_amount });
  console.log({ trnx_id: trnx_id });
};

const purchase = (data) => {
  console.log({ Purchase: data });
  let trnx_id = data.match(trxn_id_pattern);
  console.log({ tranaction_id: trnx_id });
};

const check = (data) => {
  if (data.includes("Cash Out")) {
    return withdrawal(data);
  } else if (data.includes("Payment received")) {
    return receipt(data);
  } else {
    return purchase(data);
  }
};

bot.on("text", (ctx) => {
  const smsBody = ctx.message.text;
  check(smsBody);
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, function () {
  console.log(`server running on port ${PORT}.`);
});

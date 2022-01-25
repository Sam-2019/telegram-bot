import express from "express";
import { Telegraf, Telegram } from "telegraf";
import * as dotenv from "dotenv/config";
import { TOKEN, PORT } from "./config.js";

import { checkAirtelTigo } from "./smsExtract/airteltigo";
import { checkMTN } from "./smsExtract/mtn";
import { checkVodafone } from "./smsExtract/vodafone";
import {
  identifier_vodafone,
  withdarawal_airteltigo,
  customer_airteltigo,
  receipt_airteltigo,
} from "./smsExtract/constants.js";

const { reply, fork } = Telegraf;

const checkNetwork = (data) => {
  if (data.startsWith(identifier_vodafone)) {
    return checkVodafone(data);
  }

  if (
    data.startsWith(withdarawal_airteltigo) ||
    data.startsWith(customer_airteltigo) ||
    data.startsWith(receipt_airteltigo)
  ) {
    return checkAirtelTigo(data);
  }

  return checkMTN(data);
};

const bot = new Telegraf(TOKEN);
bot.launch();
// bot.use(Telegraf.log());

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

bot.on("text", (ctx) => {
  const smsBody = ctx.message.text;

  if (smsBody.length >= 112) {
    return checkNetwork(smsBody);
  }

  return ctx.reply("No message");
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

import express from "express";
import { Telegraf, Telegram } from "telegraf";
import { check } from "./smsExtract.js";
import * as dotenv from "dotenv/config";
import { TOKEN, PORT } from "./config.js";

import { checkAirtelTigo } from "./smsExtract(at)";
import { checkMTN } from "./smsExtract(mtn)";
import { checkVodafone } from "./smsExtract(vodafone)";

const { reply, fork } = Telegraf;

const checkNetwork = (data) => {
  if (data.startsWith("00000")) {
    return checkVodafone(data);
  }

  if (
    data.startsWith("You have withdrawn") ||
    data.startsWith("Dear Customer") ||
    data.startsWith("You have received")
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

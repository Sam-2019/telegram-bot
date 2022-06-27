import express from "express";
import { Telegraf, Telegram } from "telegraf";
import * as dotenv from "dotenv/config";
import { TOKEN, PORT } from "./config.js";

import { checkAirtelTigo } from "./smsExtract/airteltigo";
import { checkMTN } from "./smsExtract/mtn";
import { checkVodafone } from "./smsExtract/vodafone";
import { checkGWater } from "./smsExtract/gWater";
import { checkECG } from "./smsExtract/ecg.js";
import {
  identifier_vodafone,
  withdarawal_airteltigo,
  customer_airteltigo,
  receipt_airteltigo,
  service_charge_g_water,
  prev_acc_g_water,
  fire_rural_g_water,
  ecg_message,
  twitter_link,
} from "./smsExtract/constants.js";
import { checkTwiter } from "./smsExtract/twitterlink.js";

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

  if (
    data.includes(service_charge_g_water) ||
    data.includes(prev_acc_g_water) ||
    data.includes(fire_rural_g_water)
  ) {
    return checkGWater(data);
  }

  if (data.includes(ecg_message)) {
    return checkECG(data);
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

// bot.command("getMember", (ctx) => {
//   const data = ctx.message.text.slice(11);
//   console.log(data);
//   ctx.reply("Enter member's name");
//   console.log(ctx.message.text);
// });

bot.on("text", (ctx) => {
  const smsBody = ctx.message.text;

  if (smsBody.includes(twitter_link)) {
    return checkTwiter(smsBody);
  }

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

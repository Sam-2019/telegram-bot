import express from "express";
import { Telegraf } from "telegraf";
import { TOKEN, PORT } from "./config.js";
import { extract } from "./smsExtract";

const bot = new Telegraf(TOKEN);
bot.launch();

bot.on("text", (ctx) => {
  const smsBody = ctx.message.text;

  if (!smsBody) {
    return ctx.reply("No message");
  }

  return extract(smsBody);
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

const app = express();

app.get("/", function (req, res) {
  res.send("Konnichiwa");
});

app.listen(PORT, function () {
  console.log(`server running on port ${PORT}.`);
});

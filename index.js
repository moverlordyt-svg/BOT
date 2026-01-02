const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log("Bot Online");
});

client.on("messageCreate", msg => {
  if (msg.content === "!ping") {
    msg.reply("Pong 🏓");
  }
});

client.login("OTg1NDk0NTM4NzI4NjQwNTUy.GoaP8H.p0BvmE1LEt-WQ73lF_dt7uAUaz99zByH_kzPIo");
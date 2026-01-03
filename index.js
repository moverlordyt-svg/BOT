const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.OTg1NDk0NTM4NzI4NjQwNTUy.GjBReb.u6CVEo42x97Jaz_hY4UXBAz0d_OyDOORh55ujM);

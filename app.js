const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./config.json");
require("./util/eventLoader")(client);
/* ////////// /
/    LOGIN    /
/  ///////// */

client.login(config.token);

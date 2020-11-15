const Discord = require("discord.js");

const TOKEN = process.ENV.TOKEN;
const PREFIX = process.ENV.PREFIX

const bot = new Discord.Client();

const {
  commands
} = require("./commands.js");

const getCommand = (message) => message.split(" ")[0].split(config.prefix)[1];
const isCommand = (message) => message[0] == PREFIX;
const getParameters = (message) => {
  parameters = message.split(" ");
  parameters.shift();
  return parameters;
};

bot.login(TOKEN);

bot.on("ready", function () {
  console.log("OK");
});

bot.on("message", (message) => {
  if (isCommand(message.content)) {
    inputCommand = getCommand(message.content);
    parameters = getParameters(message.content);
    message.channel.send(commands[inputCommand].process(parameters));
  }
});
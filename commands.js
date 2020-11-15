const commands = {
  roll: {
    usage: "!roll <number> <number>",
    decription: "Generate random number between 0 and input number or between two numbers.",
    process: (args) => {
      if (parseInt(args[0]) > parseInt(args[1]))
        return "Error, maximum value should be more than minimum.";
      if (args.length == 0)
        args = [0, 100];
      var result = Math.floor(Math.random() * ((args[1] || 0) - args[0])) + parseInt(args[0]);
      return `**${result}**`;
    },
  },
  flip: {
    usage: "!flip",
    description: "Return side of coin",
    process: () => {
      var side = Math.floor(Math.random() * 2) == 1 ? ['', "ОРЕЛ"] : ["a", "РЕШКА"];
      return (`Выпал${side[0]} **${side[1]}**.`);
    }
  }
};

module.exports.commands = commands;
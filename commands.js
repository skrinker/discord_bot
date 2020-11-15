const commands = {
  roll: {
    usage: "!roll <number> <number>",
    decription: "Generate random number between 0 and input number or between two numbers.",
    process: (args) => {
      if (parseInt(args[0]) > parseInt(args[1]))
        return "Error, maximum value should be more than minimum.";
      if (args.length == 0) return Math.floor(Math.random() * 100);
      return (
        Math.floor(Math.random() * ((args[1] || 0) - args[0])) +
        parseInt(args[0])
      );
    },
  },
  flip: {
    usage: "!flip",
    description: "Return side of coin",
    process: () => {
      var side = Math.floor(Math.random() * 2) == 1 ? "ОРЕЛ" : "РЕШКА";
      return (`Выпала **${side}**.`);
    }
  }
};

module.exports.commands = commands;
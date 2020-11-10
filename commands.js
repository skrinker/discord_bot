const commands = {
  roll: {
    usage: "r <number> <number>",
    decription:
      "Generate random number between 0 and input number or between two numbers.",
    process: (args) => {
      if (args[0] > args[1])
        return "Error, maximum value should be more than minimum.";
      if (args.length == 0) return "Error, input a number.";
      return (
        Math.floor(Math.random() * ((args[1] || 0) - args[0])) +
        parseInt(args[0])
      );
    },
  },
};

module.exports.commands = commands;

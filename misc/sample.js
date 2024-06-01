const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Adding a note",
  handler: function () {
    console.log("New note is being added");
  },
});

yargs.command({
  command: "remove",
  describe: "Removing a note",
  handler: function () {
    console.log("Note Removed");
  },
});

yargs.command({
  command: "list",
  describe: "Listing all notes",
  handler: function () {
    console.log("All notes are listed");
  },
});

yargs.command({
  command: "read",
  describe: "Reading all the notes",
  handler: function () {
    console.log("Reading all the notes");
  },
});

console.log(yargs.argv);

const notes = require("./notes");
const yargs = require("yargs");

yargs.command({
  command: "list",
  describe: "show the list of notes",
  handler:function(){
    notes.listNote()
  }
})

yargs.command({
  command:"read",
  describe:"read the note",
  builder:{
    title:{
      describe:"title of the note",
    }
  },
  handler:function(argv){
    notes.readnote(argv.title)
  }
})

yargs.command({
  command: "add",
  describe: "This command adds the data",
  builder: {
    title: {
      describe: "Title of the note",
      demand: true,
      type: "string",
    },
    body: {
      describe: "Body of the note",
      demand: true,
      type: "number",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "This command removes the data",
  builder: {
    title: {
      describe: "This title note would be removed",
      demand: true,
    }, 
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.parse();

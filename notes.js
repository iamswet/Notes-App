const fs = require("fs");
const chalk = require("chalk");

const listNote = function () {
  const notesbr = loadnotes();
  console.log(chalk.green.inverse("Your Notes"));
  notesbr.forEach((element) => {
    console.log(element.title);
  });
};

const addNote = function (title, body) {
  const notes = loadnotes();
  const dupli = notes.filter(function (note) {
    return title === note.title;
  });
  if (dupli.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note added"));
  } else {
    console.log(chalk.red.inverse("Same title exists!!"));
  }
};

const removeNote = function (title) {
  const notes = loadnotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notesToKeep.length < notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("Note doesn't exist"));
  }
};

const readnote = (title) => {
  const notes = loadnotes();
  const noteToRead = notes.find(function (note) {
    return note.title === title;
  });
  if (noteToRead) {
    console.log(chalk.green.inverse("Note Found"));
    console.log(noteToRead.body);
  } else {
    console.log(chalk.red.inverse("Note doesn't exist"));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadnotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readnote: readnote,
};

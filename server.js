const express = require("express");
const fs = require("fs");
const notes = require("./Develop/db/db.json");
const path= require(".path");
const uuid = require("uuid");
const { DH_CHECK_P_NOT_SAFE_PRIME} = require("constants");

const app = express();
var PORT =process.env.PORT || 4023;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.get("api/notes",(req,res)=> {
    res.sendFile(path.join(_dirname, "/db/db.jsom"))
});

app.post("/api/notes", (req,res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const NewNotes = req.body;
    NewNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes);
});

app.delete("/api/notes/:id", (req,res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const delNote = notes.filter(rmvNote) => resmvNote.id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(delNote));
})
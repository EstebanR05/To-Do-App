const dataBase = require('../schemas/dataBase.js');

const getNoteService = async () => { 
    return await dataBase.getNote();
}

const getNoteByIdService = async (req, res) => { }

const createNoteService = async (req, res) => { }

const updateNoteService = async (req, res) => { }

const delteNoteService = async (req, res) => { }

module.exports = { getNoteService, getNoteByIdService, createNoteService, updateNoteService, delteNoteService }
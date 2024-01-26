const noteService = require('../services/noteService.js');

const getNoteController = async (req, res) => {
    return await noteService.getNoteService();
}

const getNoteByIdController = async (req, res) => {
    return await noteService.getNoteByIdService(req, res);
}

const createNoteController = async (req, res) => {
    return await noteService.createNoteService(req, res);
}

const updateNoteController = async (req, res) => {
    return await noteService.updateNoteService(req, res);
}

const delteNoteController = async (req, res) => {
    return await noteService.delteNoteService(req, res);
}

module.exports = { getNoteController, getNoteByIdController, createNoteController, updateNoteController, delteNoteController }

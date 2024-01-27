import {
    getNoteService,
    getNoteByIdService,
    createNoteService,
    updateNoteService,
    delteNoteService
} from '../services/noteService.js';

export const getNoteController = async (req, res) => {
    const notes = await getNoteService();
    res.send(notes).status(200);
}

export const getNoteByIdController = async (req, res) => {
    let id = req.params.id;
    const note = await getNoteByIdService(id);
    res.send(note).status(200);
}

export const createNoteController = async (req, res) => {
    const { task, detail } = req.body;
    const noteCreated = await createNoteService(task, detail);
    res.send(noteCreated).status(201);
}

export const updateNoteController = async (req, res) => {
    let id = req.params.id;
    const { task, detail } = req.body;
    const updatedNote = await updateNoteService(id, task, detail);
    res.send(updatedNote).status(201);
}

export const delteNoteController = async (req, res) => {
    let id = req.params.id;
    const deletedNote = await delteNoteService(id);
    res.send(deletedNote).status(200);
}
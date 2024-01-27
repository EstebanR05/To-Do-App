import {
    getNote,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from '../schemas/dataBase.js';

export const getNoteService = async () => {
    return await getNote();
}

export const getNoteByIdService = async (id) => {
    return await getNoteById(id);
}

export const createNoteService = async (task, detail) => {
    return await createNote(task, detail);
}

export const updateNoteService = async (id, task, detail) => {
    return await updateNote(id, task, detail);
}

export const delteNoteService = async (id) => {
    return await deleteNote(id);
}

import express from 'express';
import {
    getNoteController,
    getNoteByIdController,
    createNoteController,
    updateNoteController,
    delteNoteController
} from '../controller/noteController.js';

export const noteRouter = express.Router();

noteRouter
    .get('/note', getNoteController)
    .get('/note/:id', getNoteByIdController)
    .post('/note', createNoteController)
    .put('/note/:id', updateNoteController)
    .delete('/note/:id', delteNoteController);

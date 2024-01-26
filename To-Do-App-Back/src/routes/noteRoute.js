const express = require('express');
const noteController = require('../controller/noteController.js');

const router = express.Router();

router
    .get('/note', noteController.getNoteController)
    .get('/note/:id', noteController.getNoteByIdController)
    .post('/note', noteController.createNoteController)
    .put('/note/:id', noteController.updateNoteController)
    .delete('/note/:id', noteController.delteNoteController);

module.exports = router;
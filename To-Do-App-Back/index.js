import express from 'express';
import { getNote } from './src/schemas/dataBase.js';

const app = express();

app.get('/note', async (req, res) => {
    const notes =  await getNote();
    res.send(notes);
})

/*
const routerNote = require('./src/routes/noteRoute.js');
app.use('/api/', routerNote)
*/

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('something broke!');
});

app.listen(4000, () => {
    console.log('server listen in port: ', 4000);
});
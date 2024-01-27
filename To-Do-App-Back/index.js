import express from 'express';
import { noteRouter } from './src/routes/noteRoute.js';

const app = express();
const port = 4000;

app.use(express.json());
app.use('/api', noteRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('something broke!');
});

app.listen(port, () => {
    console.log('server listen in port: ', port);
});
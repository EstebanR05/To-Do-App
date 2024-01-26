import mysql from "mysql2";

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'To-Do-App'
}).promise();

export const getNote = async () => {
    const [row] = await pool.query('SELECT * FROM notes');
    return row;
}

export const getNoteById = async (id) => {
    const [row] = await pool.query('SELECT * FROM notes WHERE id = ?', [id]);
    return row[0];
}

export const createNote = async (task, detail) => {
    const [result] = await pool.query('INSERT INTO notes (task, detail) VALUES (?, ?)', [task, detail]);
    return getNoteById(result.insertId);
}

export const updateNote = async (id, task, detail) => {

    if (task || detail === '' && task || detail === undefined) {
        return "you have error because don't send all params";
    }

    if (id == undefined || null || 0) {
        return "Error, we can't do this action because you don't have id";
    }

    const [result] = await pool.query('UPDATE notes SET task = ?, detail = ?  WHERE id = ?;', [task, detail, id]);

    if (result.warningStatus != 0) {
        return "Error, we can't do this action"
    }

    return 'ok';
}

export const deleteNote = async (id) => {
    if (id == undefined || null || 0) {
        return "Error, we can't do this action because you don't have id";
    }

    const [result] = await pool.query('DELETE FROM notes WHERE id = ?', [id]);

    if (result.warningStatus != 0) {
        return "Error, we can't do this action"
    }

    return 'ok';
}

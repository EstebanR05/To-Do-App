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
    const [result] = await pool.query('UPDATE notes SET task = ?, detail = ?  WHERE id = ?;', [task, detail, id]);
    return getNoteById(id);
}

export const deleteNote = async (id) => {
    const [result] = await pool.query('DELETE FROM notes WHERE id = ?', [id]);
    return 'ok';
}

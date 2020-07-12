const sqlite3 = require ('sqlite3').verbose ();
const path = require ('path');
const db = new sqlite3.Database (
path.resolve (__dirname, '..', 'db', 'raw_sqlite.db'),
sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
err => {
if (err) console.log ('Burros');
else console.log ('Connected to the raw_sqlite database.');
}
);
db.run (
    `
    CREATE TABLE IF NOT EXISTS utilizadores(
        '_id' varchar(255) PRIMARY KEY,
        'nome' varchar(50),
        'idade' int,
        'localidade' varchar(50),
        'distrito' varchar (50)
    );
`
);
db.run (
    `
    CREATE TABLE IF NOT EXISTS animais(
        '_id' varchar(255),
        'nome' varchar (50),
        'idade' int,
        'localidade' varchar(50),
        'distrito' varchar (50)
    );
`
);
module.exports = db;
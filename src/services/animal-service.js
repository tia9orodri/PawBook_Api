const db = require('../configs/sqlite');
const uuid = require('uuid').v4;

exports.getAnimals = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT _id, nome FROM animais `, (err, animais) => {
            if (err) reject(err);
            resolve(animais);
        });
    });
};
exports.getAnimal = id => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM animais WHERE _id = ?`, [id], (err, animal) => {
            if (err) reject(err);
            resolve(animal);
        });
    });
};
exports.addAnimal = body => {
    return new Promise((resolve, reject) => {
        const id = uuid();
        db.run(
            `INSERT INTO animais(_id, nome, idade, localidade, distrito) VALUES(?,?,?,?,?)`,
            [id, body.nome, body.idade, body.localidade, body.distrito],
            err => {
                if (err) reject(err);
                resolve({ inserted: 1, _id: id });
            }
        );

    });
};
exports.updateAnimal = (id, body) => {
    return new Promise((resolve, reject) => {
        db.run(
            `UPDATE animais
             SET nome = ?, idade = ?, localidade = ?, distrito = ? 
             WHERE _id = ?`,
              [body.nome, body.idade, body.localidade, body.distrito, id], 
            err => {
                if (err) reject(err);
                resolve({updated:1,animal});
            }
        );
    });
};
exports.deleteAnimal = id => {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM animais WHERE _id = ?`, [id], (err, animal) => {
                if (err) reject(err);
                resolve({removed:1,animal});
            }
        );
    });
}; 
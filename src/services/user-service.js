const db = require("../configs/sqlite");
const cipher = require("../helpers/cipher");
const roles = require("../helpers/roles");


////Resolver ESTA PARTE PARA SQLITE
/*exports.register = (username, rawPassword,nome, localidade, distrito, email) => {
    return new Promise((resolve, reject) => {
        try {
            db.all('utilizadores').findOne({ username: username }).then((found) => {
                if (!found) {
                    if (Object.values(roles).indexOf(role) > -1) {
                        if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d$@$!%*#?&-.]{8,}$/.test(rawPassword)) {
                            const dataIv = cipher.generateIv();
                            const password = cipher.encrypt(rawPassword, dataIv);
                            db.collection('users').insertOne({ username, password, role, dataIv })
                                .then(() => resolve())
                                .catch((error) => reject(error.message));
                        } else reject('invalid password');
                    } else reject('invalid role');
                } else reject('username already in use');
            }).catch((error) => reject(error.message));
        } catch (error) { reject(error.message); }
    });
};*/


exports.register = (username, rawPassword, nome, localidade, distrito, email ) =>{
    return new Promise((resolve, reject) =>{
        const emailUser = db.get(`SELECT * FROM utilizadores WHERE email = ?` [email]);
        console.log(emailUser);
    })
}





//RESOLVER ESTE TAMBEM
exports.authenticate = (username, rawPassword) => {
    return new Promise((resolve, reject) => {
        db.all('utilizadores')
            .findOne({ username: username })
            .then((user) => {
                if (user) {
                    const password = cipher.decrypt(user.password, user.dataIv);
                    if (password == rawPassword) resolve({ _id: user._id, role: user.role });
                }
                reject(new Error("username and password don't match"));
            })
            .catch((error) => reject(error));
    });
};


exports.getUsers = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT _id FROM utilizadores `, (err, users) => {
            if (err) reject(err);
            resolve(users);
        });
    });
};
exports.getUser = id => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM utilizadores WHERE _id=?`, [ID], (err, user) => {
            if (err) reject(err);
            resolve(user);
        });
    });
};
exports.addUser = body => {
    return new Promise((resolve, reject) => {
        const id = uuid();
        db.run(
            `INSERT INTO utilizadores(_id, nome, idade, localidade, distrito) VALUES(?,?,?,?,?)`,
            [id, body.nome, body.idade, body.localidade, body.distrito],
            err => {
                if (err) reject(err);
                resolve({ inserted: 1, _id: id });
            }
        );

    });
};
exports.updateUser = (id, user) => {
    return new Promise((resolve, reject) => {
        db.run(
            `UPDATE utilizadores
             SET (nome, idade, localidade, distrito) VALUES(?,?,?,?)
             WHERE _id = ?`, [ID, body.nome, body.idade, body.localidade, body.distrito], 
             (err, user) => {
                if (err) reject(err);
                resolve(user);
            }
        );
    });
};
exports.deleteUser = id => {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM utilizadores WHERE _id = ?`, [ID], (err, user) => {
                if (err) reject(err);
                resolve(user);
            }
        );
    });
}; 








const userService = require('../services/user-service');
const jwt = require('../helpers/jwt.js');

exports.register = (req, res) => {
  userService
    .register(req.body.username, req.body.password, req.body.nome, req.body.role)
    .then(() => res.sendStatus(200))
    .catch((message) => res.status(500).send(message));
};

exports.login = (req, res) => {
  userService
    .authenticate(req.body.username, req.body.password)
    .then((payload) => jwt.createToken(payload))
    .then((data) => res.json(data))
    .catch((error) => res.status(500).send(error.message));
};
//obter só um utilizador
exports.getUser = (req, res) => {
  userService
    .getUser(req.params.id)
    .then(() => res.json(result))
    .catch((err) => res.status(500).send(err.message));
};
//obter os utilizadores todos
exports.getUsers = (req, res) => {
  userService
    .getUsers(req.query)
    .then((result) => res.json(result))
    .catch((err) => res.status(500).send(err.message));
};

exports.putUser = (req, res) => {
  userService
    .updateUser(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
};
//apagar user
exports.removeUser = (req, res) => {
  userService
    .removeUser(req.params.id)
    .then(() => res.json(result))
    .catch((err) => res.status(500).send(err.message));
};
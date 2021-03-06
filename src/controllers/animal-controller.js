const animalService = require('../services/animal-service');

exports.getAnimals = (req, res) => {
    animalService
        .getAnimals(req.query)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};
exports.getAnimal = (req, res) => {
    animalService
        .getAnimal(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};
exports.postAnimal = (req, res) => {
    animalService
        .addAnimal(req.body)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};
exports.putAnimal = (req, res) => {
    animalService
        .updateAnimal(req.params.id, req.body)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};
exports.deleteAnimal = (req, res) => {
    animalService
        .deleteAnimal(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};
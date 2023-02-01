const models = require("../models");

const browse = (req, res) => {
  models.dog
    .findAll()
    .then(([results]) => {
      res.send(results);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.dog
    .find(id)
    .then(([result]) => {
      if (result[0]) {
        res.send(result[0]);
      } else {
        res.status(404).send("Dog not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const dog = req.body;
  dog.id = parseInt(req.params.id, 10);

  models.dog
    .update(dog)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Dog not found");
      } else {
        res.status(200).json(dog);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const dog = req.body;

  models.dog
    .insert(dog)
    .then(([result]) => {
      res
        .location(`/api/dogs/${result.insertId}`)
        .status(201)
        .send({ status: "Dog created", data: dog });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.dog
    .delete(req.params.id)
    .then(([rows]) => {
      if (rows.affectedRows === 0) {
        res.status(404).send("Dog not found");
      } else {
        res.status(201).send("Dog deleted");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};

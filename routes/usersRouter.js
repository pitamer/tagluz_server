var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var User = require('../schemas/usersSchema')

router.get("/getAll", (req, res, next) => {
  User.find({}).then((users) => {
      res.status(200).send(users)
  }, (err) => next(err)).catch((err) => console.log(err))
});

router.post("/mkUser", (req, res, next) => {
  User.create(req.body).then((user) => {
        res.status(200).send(user)
    }, (err) => next(err)).catch((err) => console.log(err))
  });

router.get("/getUser/:user", (req, res, next) => {
  User.findOne({name: req.params.user}).then((user) => {
    res.status(200).send(user);
  }, (err) => next(err)).catch((err) => (console.error(err)))
});

router.get('/checkUser/:user/:pass', (req, res, next) => {
  if (req.params.pass === '1234') {
    User.findOne({name: req.params.user}).then((user) => {
      if (user !== null) {
        res.status(200).send(true);
      } else {
        res.status(200).send(false)
      }
    }, (err) => next(err)).catch((err) => (console.log(err)))
  } else {
    res.status(500).send();
  }
})

module.exports = router;

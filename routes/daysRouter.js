var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var dateFns = require('date-fns');
var Day = require("../schemas/daySchema");


// req = request
// res = response
// next/error = go next (in backend) (error)

router.get("/getAll", (req, res, next) => {
  Day.find({}).then((days) => {
      res.status(200).send(days)
  }, (err) => next(err)).catch((err) => console.log(err))
});

router.put("/addShift", (req, res, next) => {
  const startOfDay = dateFns.startOfDay(new Date(req.body.day));
  const endOfDay = dateFns.endOfDay(new Date(req.body.day));

  // startOfDay = dateFns.addDays(startOfDay, 1); ////////////////////
  // endOfDay = dateFns.addDays(endOfDay, 1); ////////////////////

  Day.findOneAndUpdate({date: {$gte: startOfDay, $lte: endOfDay}} 
  // Day.findOneAndUpdate({date: req.body.day} 
    , {$push: {shifts: req.body.newShift}, date: startOfDay}, {upsert: true, setDefaultsOnInsert: true})
    .then((day) => {
      Day.find({}).then((days) => {
        res.status(200).send(days)
      }, (err) => next(err)).catch((err) => console.error(err))
    }, (err) => next(err)).catch((err) => console.error(err))
});

router.put("/addMessage", (req, res, next) => {

  const startOfDay = dateFns.startOfDay(new Date(req.body.day));
  const endOfDay = dateFns.endOfDay(new Date(req.body.day));

  Day.findOneAndUpdate({date: {$gte: startOfDay, $lte: endOfDay}} 
  // Day.findOneAndUpdate({date: req.body.day} 
    , {$push: {messages: req.body.newMessage}, date: startOfDay}, {upsert: true, setDefaultsOnInsert: true})
    .then((day) => {
      Day.find({}).then((days) => {
        res.status(200).send(days);
      }, (err) => next(err)).catch((err) => console.error(err))
    }, (err) => next(err)).catch((err) => console.error(err))
});

router.put("/deleteShift", (req, res, next) => {
  console.log(req.body.day);
  console.log(req.body.user);
  const startOfDay = dateFns.startOfDay(new Date(req.body.day));
  const endOfDay = dateFns.endOfDay(new Date(req.body.day));

  // startOfDay = dateFns.addDays(startOfDay, 1); ////////////////////
  // endOfDay = dateFns.addDays(endOfDay, 1); ////////////////////

  Day.findOneAndUpdate({date: {$gte: startOfDay, $lte: endOfDay}},
  // Day.findOneAndUpdate({date: req.body.day},
    {$pull: {shifts: {user: req.body.user}}})
  .then(day => {
    Day.find({}).then((days) => {
      res.status(200).send(days);
    }, (err) => next(err)).catch((err) => console.error(err))
  }, (err) => next(err)).catch((err) => console.error(err))
})

router.post("/mkDay", (req, res, next) => {
    Day.create(req.body).then((day) => {
        res.status(200).send(day)
    }, (err) => next(err)).catch((err) => console.log(err))
  });

module.exports = router

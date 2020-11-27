const User = require('../models/user');
const Topic = require('../models/topic');

module.exports = {
  index,
  createMultiple,
};

function index(req, res) {
  console.log('hit index topics route');
  User.findById(req.user._id)
    .populate('topics')
    .then((userObject) => {
      console.log('.then')
      res.status(200).json(userObject.topics);
    })
    .catch((err) => {
      res.json(err);
    });
}

function createMultiple(req, res) {
  const topics = req.body;
  topics.forEach((topic) => {
    Topic.create({ name: topic }).then((createdTopic) => {
      User.findById(req.user._id).then((user) => {
        user.topics.push(createdTopic._id);
        user.save();
      });
      res.status(200).json(createdTopic);
    });
  });
}

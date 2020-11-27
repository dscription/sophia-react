const User = require('../models/user');
const Topic = require('../models/topic');

module.exports = {
  // index,
  // create
  createMultiple,
};

function index(req, res) {
  console.log('hit index topics route');
}

function createMultiple(req, res) {
  const topics = req.body;
  const topicIds = [];
  topics.forEach((topic) => {
    Topic.create({ name: topic }).then((createdTopic) => {
      User.findById(req.user._id).then((user) => {
        user.topics.push(createdTopic._id);
        user.save();
      });
      res.status(200).json(createdTopic)
    });
  });
}

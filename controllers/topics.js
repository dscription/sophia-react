const User = require('../models/user');
const Topic = require('../models/topic');
const Content = require('../models/content');

module.exports = {
  index,
  createMultiple,
  getTopicContents,
};

function index(req, res) {
  User.findById(req.user._id)
    .populate({
      path: 'topics',
      populate: {path: 'contents'}
    })
    .then((populated) => {
      res.status(200).json(populated.topics);
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

function getTopicContents(req, res) {
  const topicId = req.params.topicId;
  Topic.findById(topicId)
    .populate('contents')
    .then((populated) => res.status(200).json(populated.contents));
}

// function getAllTopicContents(req, res) {
//   User.findById(req.user._id)
// }
const User = require('../models/user');
const Content = require('../models/content');
const Topic = require('../models/topic');

module.exports = {
  index,
  create: createOne,
};

function index(req, res) {
  console.log('index content controller hit');
}

function createOne(req, res) {
  const topicId = req.params.topicId;
  Content.create(req.body).then((content) => {
    Topic.findById(topicId).then((topic) => {
      topic.contents.push(content._id);
      topic.save();
    });
    res.status(200).json(content);
  });
}


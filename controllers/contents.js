const User = require('../models/user');
const Content = require('../models/content');
const Topic = require('../models/topic');

module.exports = {
  index,
  create: createOne,
  update
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
    }).catch((err) => console.log(err));
    res.status(200).json(content);
  });
}

function update(req, res) {
  console.log('hit update content controller')
  const contentId = req.params.contentId
  Content.findByIdAndUpdate(contentId, req.body, {
    new: true
  })
  .then((content) => {
    res.status(200).json(content)
  })
}


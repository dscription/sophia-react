const express = require('express');
const router = express.Router();
const topicsCtrl = require('../controllers/topics');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
router.get('/', checkAuth, topicsCtrl.index);
router.post('/', checkAuth, topicsCtrl.createMultiple);
router.get('/:topicId', checkAuth, topicsCtrl.getTopicContents);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;

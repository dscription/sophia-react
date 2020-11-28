const express = require('express');
const router = express.Router();
const contentsCtrl = require('../controllers/contents');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
router.get('/', checkAuth, contentsCtrl.index);
router.post('/:topicId', checkAuth, contentsCtrl.create);
// router.get('/:topicId', checkAuth, contentsCtrl.getTopicContents )

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;

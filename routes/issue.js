import express from 'express';
import issue from '../libs/issue';
const router = express.Router();

function returnResult(req, res, error, result) {
  if (error) {
      res.status(403);
  }

  res.json({
    status: error ? 403 : 200,
    result: result
  });
}

router.get('/', function(req, res) {
  issue.getAllIssues(function(error, result) {
    returnResult(req, res, error, result);
  });
});

router.post('/', function(req, res) {
  issue.postIssue({
    status: req.body.status,
    category: req.body.category,
    title: req.body.title,
    owner: req.body.owner,
    priority: req.body.priority
  }, function(error, result) {
    returnResult(req, res, error, result);
  });
});

router.put('/:seq', function(req, res) {
  issue.updateIssue({
    seq: req.params.seq,
    status: req.body.status,
    category: req.body.category,
    title: req.body.title,
    owner: req.body.owner,
    priority: req.body.priority
  }, function(error, result) {
    returnResult(req, res, error, result);
  });
});

router.delete('/:seq', function(req, res) {
  issue.deleteIssue({
      seq: req.params.seq
  }, function(error, result) {
      returnResult(req, res, error, result);
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

var issue = require('../libs/issue');

function returnResult(req, res, error, result) {
    if (error) {
      res.status(403);
    }

    res.json({
      status: error ? false : true,
      result: result
    });
}

router.get('/', function(req, res) {
  issue.Get(function(error, result) {
    returnResult(req, res, error, result);
  });
});

router.post('/', function(req, res) {
  issue.Post({
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
  issue.Put({
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
  issue.Delete({
      seq: req.params.seq
  }, function(error, result) {
      returnResult(req, res, error, result);
  });
});

module.exports = router;

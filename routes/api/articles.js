var express = require('express');
var router = express.Router();
var articleController = require('../../controllers/articleController.js');

/*
 * GET
 */
router.get('/', function(req, res) {
    articleController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
    articleController.show(req, res);
});

/*
 * POST
 */
router.post('/', function(req, res) {
    articleController.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', function(req, res) {
    articleController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
    articleController.remove(req, res);
});

module.exports = router;
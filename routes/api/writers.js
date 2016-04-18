var express = require('express');
var router = express.Router();
var writerController = require('../../controllers/writerController.js');

/*
 * GET
 */
router.get('/', function(req, res) {
    writerController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
    writerController.show(req, res);
});

/*
 * POST
 */
router.post('/', function(req, res) {
    writerController.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', function(req, res) {
    writerController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
    writerController.remove(req, res);
});

module.exports = router;
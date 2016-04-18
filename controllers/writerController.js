var writerModel = require('../models/writerModel.js');

/**
 * writerController.js
 *
 * @description :: Server-side logic for managing writers.
 */
module.exports = {

    /**
     * writerController.list()
     */
    list: function(req, res) {
        writerModel.find(function(err, writers){
            if(err) {
                return res.json(500, {
                    message: 'Error getting writer.'
                });
            }
            return res.json(writers);
        });
    },

    /**
     * writerController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        writerModel.findOne({_id: id}, function(err, writer){
            if(err) {
                return res.json(500, {
                    message: 'Error getting writer.'
                });
            }
            if(!writer) {
                return res.json(404, {
                    message: 'No such writer'
                });
            }
            return res.json(writer);
        });
    },

    /**
     * writerController.create()
     */
    create: function(req, res) {
        var writer = new writerModel({			name : req.body.name,			age : req.body.age
        });

        writer.save(function(err, writer){
            if(err) {
                return res.json(500, {
                    message: 'Error saving writer',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: writer._id
            });
        });
    },

    /**
     * writerController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        writerModel.findOne({_id: id}, function(err, writer){
            if(err) {
                return res.json(500, {
                    message: 'Error saving writer',
                    error: err
                });
            }
            if(!writer) {
                return res.json(404, {
                    message: 'No such writer'
                });
            }

            writer.name =  req.body.name ? req.body.name : writer.name;			writer.age =  req.body.age ? req.body.age : writer.age;			
            writer.save(function(err, writer){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting writer.'
                    });
                }
                if(!writer) {
                    return res.json(404, {
                        message: 'No such writer'
                    });
                }
                return res.json(writer);
            });
        });
    },

    /**
     * writerController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        writerModel.findByIdAndRemove(id, function(err, writer){
            if(err) {
                return res.json(500, {
                    message: 'Error getting writer.'
                });
            }
            return res.json(writer);
        });
    }
};
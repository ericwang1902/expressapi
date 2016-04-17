var articleModel = require('../models/articleModel.js');

/**
 * articleController.js
 *
 * @description :: Server-side logic for managing articles.
 */
module.exports = {

    /**
     * articleController.list()
     */
    list: function(req, res) {
        articleModel.find(function(err, articles){
            if(err) {
                return res.json(500, {
                    message: 'Error getting article.'
                });
            }
            return res.json(articles);
        });
    },

    /**
     * articleController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        articleModel.findOne({_id: id}, function(err, article){
            if(err) {
                return res.json(500, {
                    message: 'Error getting article.'
                });
            }
            if(!article) {
                return res.json(404, {
                    message: 'No such article'
                });
            }
            return res.json(article);
        });
    },

    /**
     * articleController.create()
     */
    create: function(req, res) {
        var article = new articleModel({
        });

        article.save(function(err, article){
            if(err) {
                return res.json(500, {
                    message: 'Error saving article',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: article._id
            });
        });
    },

    /**
     * articleController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        articleModel.findOne({_id: id}, function(err, article){
            if(err) {
                return res.json(500, {
                    message: 'Error saving article',
                    error: err
                });
            }
            if(!article) {
                return res.json(404, {
                    message: 'No such article'
                });
            }

            article.title =  req.body.title ? req.body.title : article.title;
            article.save(function(err, article){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting article.'
                    });
                }
                if(!article) {
                    return res.json(404, {
                        message: 'No such article'
                    });
                }
                return res.json(article);
            });
        });
    },

    /**
     * articleController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        articleModel.findByIdAndRemove(id, function(err, article){
            if(err) {
                return res.json(500, {
                    message: 'Error getting article.'
                });
            }
            return res.json(article);
        });
    }
};
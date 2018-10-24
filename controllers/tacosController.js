const Taco = require('../models/Taco');

tacosController = {
    index: function(req, res) {
        res.render('tacos/index', { tacos: Taco.getAllTacos() });
    },

    new: function(req, res) {
        res.render('tacos/new');
    },  

    create: function(req, res) {
        let data = req.body;
        Taco.addTaco(data.tacoName, data.tacoProtein, data.tacoGarnish);
        res.redirect('/tacos');
    }, 

    show: function(req, res) {
        let taco = Taco.getTaco(req.params.id);
        res.render('tacos/show', { taco: taco, id: req.params.id });
    }, 

    edit: function(req, res) {
        let taco = Taco.getTaco(req.params.id);
        res.render('tacos/edit', { taco: taco, id: req.params.id })
    }, 

    update: function(req, res) {
        let data = req.body;
        Taco.updateTaco(req.params.id, data.tacoName, data.tacoProtein, data.tacoGarnish);
        res.redirect('/tacos');
    },

    destroy: function(req, res) {
        Taco.deleteTaco(req.params.id);
        res.redirect('/tacos');
    }   
}; 

module.exports = tacosController;

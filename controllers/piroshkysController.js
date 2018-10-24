const Piroshky = require('../models/Piroshky');

piroshkysController = {
    // GET /piroshkys - returns all piroshkys
    index: function(req, res) {
        let piroshkys = Piroshky.getAllPiroshkys();
        res.render('piroshkys/index', { piroshkys: piroshkys });
    },

    // GET /piroshkys/new - returns the creation form
    new: function(req, res) {
        res.render('piroshkys/new')
    },  

    // POST /piroshkys - adds the form data to the db
    create: function(req, res) {
        let data = req.body;
        Piroshky.addPiroshky(data.piroshkyName, data.piroshkyFilling, data.piroshkySize);
        res.redirect('/piroshkys');
    }, 

    // GET /piroshkys/:id - returns 1 piroshky
    show: function(req, res) {
        let piroshky = Piroshky.getPiroshky(req.params.id);
        res.render('piroshkys/show', { piroshky: piroshky, id: req.params.id });
    }, 

    // GET /piroshkys/:id/edit - returns the update form
    edit: function(req, res) {
        let piroshky = Piroshky.getPiroshky(req.params.id);
        res.render('piroshkys/edit', { piroshky: piroshky, id: req.params.id });
    }, 

    // PUT /piroshkys/:id - updates the selected piroshky in db
    update: function(req, res) {
        let data = req.body;
        Piroshky.updatePiroshky(req.params.id, data.piroshkyName, data.piroshkyFilling, data.piroshkySize);
        res.redirect('/piroshkys');
    },

    // DELETE /piroshkys/:id - deletes the selected piroshky from db
    destroy: function(req, res) {
        Piroshky.deletePiroshky(req.params.id);
        res.redirect('/piroshkys');
    }   
}; 

module.exports = piroshkysController;

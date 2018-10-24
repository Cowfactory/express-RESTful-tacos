const express = require('express');
const router = express.Router();
const tacos = require('../controllers/tacosController');

// GET /tacos - returns all tacos
router.get('/', tacos.index);

// GET /tacos/new - returns the creation form
router.get('/new', tacos.new);

// POST /tacos - adds the form data to the db
router.post('/', tacos.create);

// GET /tacos/:id - returns 1 taco
router.get('/:id', tacos.show);

// GET /tacos/:id/edit - returns the update form
router.get('/:id/edit', tacos.edit);

// PUT /tacos/:id - updates the selected taco in db
router.put('/:id', tacos.update);

// DELETE /tacos/:id - deletes the selected taco from db
router.delete('/:id', tacos.destroy);

module.exports = router;



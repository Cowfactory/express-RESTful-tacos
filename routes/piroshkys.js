const express = require('express');
const router = express.Router();
const piroshkys = require('../controllers/piroshkysController');

// GET /piroshkys - returns all piroshkys
router.get('/', piroshkys.index);

// GET /piroshkys/new - returns the creation form
router.get('/new', piroshkys.new);

// POST /piroshkys - adds the form data to the db
router.post('/', piroshkys.create);

// GET /piroshkys/:id - returns 1 piroshky
router.get('/:id', piroshkys.show);

// GET /piroshkys/:id/edit - returns the update form
router.get('/:id/edit', piroshkys.edit);

// PUT /piroshkys/:id - updates the selected piroshky in db
router.put('/:id', piroshkys.update);

// DELETE /piroshkys/:id - deletes the selected piroshky from db
router.delete('/:id', piroshkys.destroy);

module.exports = router;



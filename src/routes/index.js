const express = require('express');
const router = express.Router();

const home = require('../controllers/home');

router.get('/', home.index);
router.get('/article/:id', home.article);
router.get('/delete/:id', home.delete);
router.post('/add', home.add);

module.exports = router;

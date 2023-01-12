const router = require('express').Router();
const notes = require('./api/notes');

router.use('/notes', notes);

module.exports = router;
const express = require('express');
const router = express.Router();
const serverCtrl = require('../../controllers/server');

router.get('/', serverCtrl.pollAllServers);
router.get('/:name', serverCtrl.pollServer);

module.exports = router;

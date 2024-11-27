const express = require('express');
const { getUrl, getId } = require('../Controller/Url');

const router = express.Router()

router.post('/geturl',getUrl)
router.post('/getid',getId)

module.exports = router
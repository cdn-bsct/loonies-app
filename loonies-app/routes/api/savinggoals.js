const express = require('express')
const router = express.Router()
const savinggoalsCtrl = require('../../controllers/savinggoals')


router.get('/index', savinggoalsCtrl.index)
router.post('/create', savinggoalsCtrl.create)
router.get('/savings/index', savinggoalsCtrl.indexSaving)
router.post('/savings/create', savinggoalsCtrl.createSaving)

module.exports = router
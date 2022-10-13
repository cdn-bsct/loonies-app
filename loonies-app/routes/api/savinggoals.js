const express = require('express')
const router = express.Router()
const savinggoalsCtrl = require('../../controllers/savinggoals')


router.get('/index', savinggoalsCtrl.index)
router.post('/create', savinggoalsCtrl.create)
router.post('/savings/create', savinggoalsCtrl.createSaving)
router.delete('/savings/delete', savinggoalsCtrl.deleteSaving)

module.exports = router
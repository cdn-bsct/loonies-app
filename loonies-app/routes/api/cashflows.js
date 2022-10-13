const express = require('express')
const router = express.Router()
const cashflowsCtrl = require('../../controllers/cashflows')

router.get('/income', cashflowsCtrl.incomeIndex)

router.post('/create', cashflowsCtrl.create)

router.delete('/income/delete', cashflowsCtrl.deleteIncome)

module.exports = router
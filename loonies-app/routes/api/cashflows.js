const express = require('express')
const router = express.Router()
const cashflowsCtrl = require('../../controllers/cashflows')

router.get('/income', cashflowsCtrl.cashflowIndex)
router.get('/expense', cashflowsCtrl.cashflowIndex)

router.post('/create', cashflowsCtrl.create)

router.delete('/income/delete', cashflowsCtrl.deleteIncome)
router.delete('/expense/delete', cashflowsCtrl.deleteExpense)

module.exports = router
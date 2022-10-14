const User = require("../models/User")

module.exports = {
    create,
    cashflowIndex,
    deleteIncome,
    deleteExpense
}

async function deleteExpense(req, res) {
    try {
        const user = await User.findById(req.body.user)
        let deleted = user.cashflow.filter(el => el._id == req.body.expense)
        user.cashflow.pop(deleted)
        user.save()
        res.status(200).json(user)
    } catch(err) {
        console.log('Delete Expense Error', err)
        res.status(400).json()
    }
}

async function deleteIncome(req, res) {
    try {
        const user = await User.findById(req.body.user)
        let deleted = user.cashflow.filter(el => el._id == req.body.income)
        user.cashflow.pop(deleted)
        user.save()
        res.status(200).json(user)
    } catch(err) {
        console.log('Delete Income Error', err)
        res.status(400).json()
    }
}

async function create(req, res) {
    try{
        const user = await User.findById(req.body.user)
        user.cashflow.push(req.body)
        user.save()
        res.status(200).json(user)
    } catch(err) {
        console.log('Add Cashflow Error', err)
        res.status(400).json()
    }
}

async function cashflowIndex(req, res) {
    try {
        const user = await User.findById(req.user._id)
        res.status(200).json(user)
    } catch (err) {
        console.log('Income Index Fetch Error', err)
        res.status(400).json()
    }
}
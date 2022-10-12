const SavingGoal = require('../models/SavingGoals')
const Savings = require('../models/Savings')

module.exports = {
    create,
    createSaving,
    index,
    indexSaving
}

async function create(req, res) {
    try {
        const goal = await SavingGoal.create(req.body)
        res.status(200).json(goal)
    }catch(err) {
        console.log('Saving goal creation error', err)
        res.status(400).json(err)
    }
}

async function createSaving(req, res) {
    try {
        const save = await Savings.create(req.body)
        const savings = await Savings.find({goal: req.body.goal})
        res.status(200).json(savings)
    } catch(err) {
        console.log('Add savings failed',err)
        res.status(400).json(err)
    }
}

async function index(req, res) {
    try {
        const goals = await SavingGoal.find(req.body.user)
        res.status(200).json(goals)
    } catch(err) {
        console.log('Get saving goals error', err)
        res.status(400).json(err)
    }
}

async function indexSaving(req, res) {
    console.log(req.body)
    try {
        const saving = await Savings.find(req.body)
        res.status(200).json(saving)
    } catch(err) {
        console.log('Get saving goals error', err)
        res.status(400).json(err)
    }
}
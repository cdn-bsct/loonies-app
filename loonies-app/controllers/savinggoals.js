const SavingGoal = require('../models/SavingGoals')

module.exports = {
    create,
    createSaving,
    index,
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
        const goal = await SavingGoal.findById(req.body.goal)
        goal.savings.push(req.body)
        goal.save()
        res.status(200).json(goal)
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

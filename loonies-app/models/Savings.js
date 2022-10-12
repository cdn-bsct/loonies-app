const mongoose = require('mongoose')
const Schema = mongoose.Schema

const savingsSchema = new Schema ({
    amount: {type: Number, required: true},
    
    goal: {type: Schema.Types.ObjectId, ref: 'SavingGoals'},
}, {
    timestamps: true,
})

module.exports = mongoose.model('Savings', savingsSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const savingsSchema = new Schema ({
    amount: {type: Number, required: true},
}, {
    timestamps: true,
})

const savingGoalsSchema = new Schema ({
    name: {type: String, required: true},
    amount: {type: Number, required: true},
    savings: [savingsSchema],
    
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true,
})

module.exports = mongoose.model('SavingGoals', savingGoalsSchema)
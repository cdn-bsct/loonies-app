const mongoose = require('mongoose')
const Schema = mongoose.Schema

const savingGoalsSchema = new Schema ({
    name: {type: String, required: true},
    amount: {type: Number, required: true},
    

    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cashflow: {type: Schema.Types.ObjectId, ref: 'Cashflow'},
    survey: {type: Schema.Types.ObjectId, ref: 'Survey'},
}, {
    timestamps: true,
})

module.exports = mongoose.model('SavingGoals', savingGoalsSchema)
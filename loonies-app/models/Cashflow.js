const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cashflowSchema = new Schema ({
    name: {type: String, required: true},
    category: {type: String, required: true},
    amount: {type: Number, required: true},
    type: {type: String, required: true},
    
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true,
})

module.exports = mongoose.model('Cashflow', cashflowSchema)
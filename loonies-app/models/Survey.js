const mongoose = require('mongoose')
const Schema = mongoose.Schema

const surveySchema = new Schema ({
    answer: {type: String, required: true},
}, {
    timestamps: true,
})

module.exports = mongoose.model('Survey', surveySchema)
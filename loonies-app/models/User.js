const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
    }, 
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
})

module.exports = mongoose.model('User', userSchema)

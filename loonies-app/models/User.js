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
    cashflow: [cashflowSchema],
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

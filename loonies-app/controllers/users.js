const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


module.exports = {
    create, 
    login
}

async function create(req, res) {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS))
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
        })

        const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' })
        res.status(200).json(token);
    } catch(err) {
        console.log('user creation error', err)
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        const user = await User.find({ email: req.body.email })

        if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();

        const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' })
        res.status(200).json(token)
    }catch (err){
        res.status(400).json('Bad Credentials')
    }
}
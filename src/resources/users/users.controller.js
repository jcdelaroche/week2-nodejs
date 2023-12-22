const User = require('../users/users.model');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

module.exports = {
    async signup(req, res) {
        const schema = Joi.object({
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
        });

        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send({ ok: false, msg: error.details[0].message });

        let user = await User.findOne({ email: req.body.email });

        if (user)
            return res.status(400).send({ ok: false, msg: 'Account already exists' });

        user = new User(req.body);

        const salt = await bcrypt.genSalt(8); // aaa ==> masalt.123

        user.password = await bcrypt.hash(req.body.password, salt);

        try {
            await user.save();
            res.status(201).send({ ok: true, data: user });
        } catch (err) {
            console.error(err.message);
            res.status(500).send({ ok: false, msg: 'Server Error' });
        }
    },
    async getAllUsers(req, res) {
        const users = await User.find();

        res.send(users);
    },
    async login(req, res) {
        const schema = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().min(6).required(),
        });

        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send({ ok: false, msg: error.details[0].message });

        // does this user exist already?
        let user = await User.findOne({ username: req.body.username });

        if (!user)
            return res.status(400).send({
                ok: false, msg: 'Invalid username'
            });

        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isMatch)
            return res.status(400).send({ ok: false, msg: 'Invalid password' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_CODE, { expiresIn: '1d' });

        return res.send({ ok: true, data: token });
    }
};
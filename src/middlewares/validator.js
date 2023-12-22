const validatorMidlleware = (validator, type = 'body') => {
    return (req, res, next) => {
        const { error } = validator(req[type])
        if (error) return res.status(400).send(error.details[0].message);
        
        next();
    }
}

exports.validatorMidlleware = validatorMidlleware;
const validatorMiddleware = (validator, type = 'body') => {
    return (req, res, next) => {
        const { error } = validator(req[type])
        if (error) return res.status(400).send({ ok: false, error: error.details[0].message });

        next();
    }
}

exports.validatorMiddleware = validatorMiddleware;
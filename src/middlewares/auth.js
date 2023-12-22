import { JwtHelper } from '../helpers/jwt.helper.js'

export const authentificationMidlleware = () => {
    return (req, res, next) => {
        try {
            const jwtHelper = JwtHelper()

            const token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwtHelper.decodJWT(token);
            next();
        } catch (err) {
            return res.status(401).json('Invalid token')
        }
    }
}
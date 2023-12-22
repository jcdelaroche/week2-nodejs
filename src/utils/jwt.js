import jwt from 'jsonwebtoken';

export const JwtHelper = () => {
    const signJWT = data => {
        return jwt.sign({ ...data }, process.env.JWT_CODE);
    }

    const decodJWT = token => {
        return jwt.verify(token, process.env.JWT_CODE)
    }

    return {
        signJWT,
        decodJWT
    }
}
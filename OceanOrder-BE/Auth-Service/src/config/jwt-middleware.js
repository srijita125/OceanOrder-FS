import JWT from 'passport-jwt';
import User from '../models/user.js';

const ExtractJwt = JWT.ExtractJwt;
const JWTstrategy = JWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

export const passportAuth = (passport) => {
    try {
        console.log("Inside passportAuth");
        passport.use(new JWTstrategy(jwtOptions, async (payload, done) => {
            console.log("req sent to strategy!!");
            const user = await User.findById(payload._id);
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        }));
    } catch (err) {
        console.log(err);
        throw err;
    }
}
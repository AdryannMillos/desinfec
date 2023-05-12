const passport = require("passport");
const passportJwt = require("passport-jwt");
const Models = require("../../../models/index");

const { ExtractJwt } = passportJwt;
const StrategyJwt = passportJwt.Strategy;

passport.use(
    new StrategyJwt(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET || "somethingsecret",
        },
        (jwtPayload, done) => {
            return Models.User.findOne({ where: { id: jwtPayload.id } })
                .then((user) => {
                    return done(null, user);
                })
                .catch((err) => {
                    return done(err);
                });
        }
    )
);

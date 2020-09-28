const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
const User2 = mongoose.model('user2');


passport.serializeUser((user, done) =>{
    done(null, user.id);
});

passport.deserializeUser((id, done) =>{
    User.findById(id)
        .then((user) => {
            done(null,user);
    })
});


passport.use(new GoogleStrategy({
    clientID: keys.googleCLientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id})
    //.then(existingUser => {
        if(existingUser){
            done(null, existingUser); 
        }else{
            const user = await new User({googleId: profile.id})
                .save()
                done(null, user)
                //.then(user => done(null, user));
        }


    
    }
));


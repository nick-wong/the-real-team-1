// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth' : {
    'clientID'      : '140437863440312', // your App ID
    'clientSecret'  : '25056ca7d9079d4215209ac2b26164f5', // your App Secret
    //'callbackURL'   : 'http://localhost:3000/auth/facebook/callback',
    'callbackURL'   : 'http://the-real-team-1.herokuapp.com/auth/facebook/callback',
    'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
  },
};
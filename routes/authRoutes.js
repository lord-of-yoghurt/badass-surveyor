const passport = require('passport');

module.exports = app => {
  // route for where the user is gonna be directed
  // to start the authentication process
  app.get(
    '/auth/google',
    // instead of the arrow function with req/res,
    // we call on the passport object with the `authenticate`
    // method. the 'google' string we pass to it doesn't
    // have much to do with the above configuration for the
    // google strategy. the google strategy is registered with
    // passport, so whenever the `authenticate` method is called
    // with 'google', passport will know what strategy we're using
    passport.authenticate('google', {
      // the scope specifies to google what access we're requesting
      // from the google API - in this case, the user's profile
      // and email data. all these strings are very specific and
      // must be used with passport and google!
      scope: ['profile', 'email']
    })
  );

  // this one handles sending a follow-up request to google after
  // user grants permission for app to access their data and google
  // kicks the user back to our app. this follow-up is the 'callback' -
  // passport exchanges the code with google for information about
  // the user.
  app.get(
    '/auth/google/callback',
    // in return for this, we receive an access token - the one
    // that
    passport.authenticate('google')
  );
};

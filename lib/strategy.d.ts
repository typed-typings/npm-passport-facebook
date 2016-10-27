import OAuth2Strategy = require('passport-oauth2');

/**
 * The Facebook authentication strategy authenticates requests by delegating to
 * Facebook using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `cb`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Examples:
 *
 *     passport.use(new FacebookStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/facebook/callback'
 *       },
 *       function(accessToken, refreshToken, profile, cb) {
 *         User.findOrCreate(..., function (err, user) {
 *           cb(err, user);
 *         });
 *       }
 *     ));
 */
declare class FacebookStrategy extends OAuth2Strategy<FacebookStrategy.Profile> {
  name: 'facebook';

  constructor (options: FacebookStrategy.Options, verify: OAuth2Strategy.VerifyFunction<FacebookStrategy.Profile>);
}

declare namespace FacebookStrategy {
  export interface Options extends OAuth2Strategy.OAuth2Options {
    profileURL?: string;
    profileFields?: string[];
    enableProof?: boolean;
  }

  export interface Profile {
    provider: 'facebook';
    _raw: string;
    _json: any;
    id: string;
    username: string;
    displayName: string;
    name: {
      familyName: string;
      givenName: string;
      middleName?: string;
    };
    gender: string;
    profileUrl: string;
    emails?: Array<{ value: string }>;
    photos?: Array<{ value: string }>;
  }
}

export = FacebookStrategy;

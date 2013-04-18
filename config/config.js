module.exports = {
    development: {
      root: require('path').normalize(__dirname + '/..'),
      port: 3320,
      app: {
        name: 'Lost Cause - Lake of Tears'
      },
      db: 'mongodb://localhost/noobjs_dev',
      facebook: {
          clientID: "124202001098814"
        , clientSecret: "826ac000e3e8fdc74fbe710e5081e588"
        , callbackURL: "http://lc.lakeoftears.co/auth/facebook/callback"
      },
      twitter: {
          clientID: "L8g9cU11sTOBhhhzStp0Q"
        , clientSecret: "hqiFqVf69nT2GxUTbrZpOlRKIwENKHxmn6iBgF3Khw"
        , callbackURL: "http://lc.lakeoftears.co/auth/twitter/callback"
      },
      github: {
          clientID: 'APP_ID'
        , clientSecret: 'APP_SECRET'
        , callbackURL: 'http://localhost:3000/auth/github/callback'
      },
      google: {
          clientID: "971115832776.apps.googleusercontent.com"
        , clientSecret: "Riloxmogdbe9ALVjM6zov3VG"
        , callbackURL: "http://lc.lakeoftears.co/auth/google/callback"
      }
    }
  , test: {

    }
  , production: {
      root: require('path').normalize(__dirname + '/..'),
      port: 3320,
      app: {
        name: 'Lost Cause - Lake of Tears'
      },
      db: 'mongodb://localhost/431f9fjkFD30f_lc_prod',
      facebook: {
          clientID: "124202001098814"
        , clientSecret: "826ac000e3e8fdc74fbe710e5081e588"
        , callbackURL: "http://lc.lakeoftears.co/auth/facebook/callback"
      },
      twitter: {
          clientID: "L8g9cU11sTOBhhhzStp0Q"
        , clientSecret: "hqiFqVf69nT2GxUTbrZpOlRKIwENKHxmn6iBgF3Khw"
        , callbackURL: "http://lc.lakeoftears.co/auth/twitter/callback"
      },
      github: {
          clientID: 'APP_ID'
        , clientSecret: 'APP_SECRET'
        , callbackURL: 'http://localhost:3000/auth/github/callback'
      },
      google: {
          clientID: "971115832776.apps.googleusercontent.com"
        , clientSecret: "Riloxmogdbe9ALVjM6zov3VG"
        , callbackURL: "http://lc.lakeoftears.co/auth/google/callback"
      }
    }
}

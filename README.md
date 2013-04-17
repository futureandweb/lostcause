Lost Cause
===========

This is a guild website built for the TERA guild Lost Cause on Lake of Tears.  This is a site build using Express, Passport, Mongoose, Jade, and Stylus.

**Note:** You need to have node.js and mongodb installed and running

## Install
```sh
  $ git clone https://github.com/jbcode3/lostcause.git
  $ npm install
  $ cp config/config.example.js config/config.js
  $ cp config/imager.example.js config/imager.js
  $ npm start
```

**NOTE:** Do not forget to update your facebook twitter and github APP_ID and APP_SECRET in `config/config.js`. Also if you want to use image uploads, don't forget to replace the S3 and Rackspace keys in `config/imager.js`.

Then visit [http://localhost:3000/](http://localhost:3000/)

## Directory structure
```
-app/
  |__controllers/
  |__models/
  |__views/
-config/
  |__routes.js
  |__config.js
  |__passport.js (auth config)
  |__express.js (express.js configs)
  |__middlewares/ (custom middlewares)
-public/
  |__fonts/
  |__img/
  |__js/
  |__stylesheets/
```


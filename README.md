# Brisk web-app seed

The goal is to make spool-up of new, real-time web-apps as simple as possible.  This project is an ExpressJS app utilizing Jade & Stylus, AngularJS, and Firebase for the back-end (via angularfire).  Firebase + angularfire means automatic synchronization of the Angular model (the parts you specify) with Firebase.

Kudos to anantn for angularfire (awesome); and bennadel for inspiring the routing method.

## How to use it

Clone the brisk repository and start hacking!

Run the app in the typical express fashion:

    node app.js

Run tests or scenarios by hitting these URLs:

http://localhost:3000/specs
    http://localhost:3000/scenarios

### Sending/Receiving data from Firebase

Angularfire handles this for you!  Refer to it's documentation for details...it super-simple!
https://github.com/firebase/angularFire

## Example Application

This is an example single-page app including a sample Bootstrap layout, a chat mode, and use accounts.  It has a simple Angular router and support functions built-in.

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        *.styl          --> stylesheets get processed into similarly named .css files
      img/              --> image files
      js/               --> javascript files
        application.js  --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
    routes/
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
      partials/         --> angular view partials (partial jade templates)


## Patterns

Building up a single-page app is straightforward with Jade includes.  You can hide views using <ng-switch> (exemplified in index.jade).  It's certainly possible to run multiple pages, each "root" page should extend layout.jade.
By default the router supports 3-tier URLs: /root/branch/leaf.  It's possible to extend this arbitrarily but I don't see the need myself.

## Other Resources

Bootstrap
AngularUI
AngularStrap

## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express, Jade, and Stylus, http://expressjs.com, http://jade-lang.com, and http://learnboost.github.io/stylus are
the place(s) to go.
The most excellent Firebase docs are here: https://www.firebase.com/docs
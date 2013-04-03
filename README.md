# brisk

###### Real-Time Javascript Seed Project

## Incorporations
Node.js
  Jasmine
  Express
  Socket.io
  Jade
  Stylus
  MongoDB
AngularJS
  Jasmine
  Store.js

## Goals
  Node.js application spin-up time is already ridiculously easy.
  This project is loaded with the various cool stuff that I like...geared toward a single-dude, PaaS work-flow.
  
## Patterns
  app.js contains the setup code to wire up the various server pieces.
  /routes/socket.js is where web-socket events are laid out.  Ddepending on the scope of the application event-handlers might better live in required scripts.
  Jade will automatically concatenate/compress generated html into one file if child-templates are 'include'd.
  Stylus will also concatenate/compress generated CSS if related styles are @imported.
  Jasmine can be made to auto-run via Karma.

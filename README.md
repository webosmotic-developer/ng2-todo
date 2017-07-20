# Todo
[![Build Status](https://secure.travis-ci.org/webosmotic-developer/todo.png?branch=master)](https://travis-ci.org/webosmotic-developer/todo)
[![Coverage Status](https://coveralls.io/repos/webosmotic-developer/todo/badge.svg?branch=master)](https://coveralls.io/r/webosmotic-developer/todo/?branch=master)

You'll be working with the latest versions of:

+ [Angular 2.x](https://github.com/angular/angular) - The new version of the framework that changed the way we create web applications;
+ [Bootstrap](https://github.com/twbs/bootstrap) - A sleek, intuitive, and powerful mobile-first front-end framework for faster and easier web development;
+ [Node](https://github.com/nodejs/node) - Node is made to handle the most the web brings;
+ [Typescript](https://github.com/Microsoft/TypeScript) - Use the bleeding edge of javascript today with typings;
+ [Mongoose](https://github.com/Automattic/mongoose) - Since we're using MongoDB, we've got Mongoose to model your node.js application;
+ [Express](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for node;
+ [Bluebird](https://github.com/petkaantonov/bluebird) - Bluebird is a fully featured promise library with focus on innovative features and performance;
+ [Lodash](https://github.com/lodash/lodash) - A modern JavaScript utility library delivering modularity, performance, & extras.
+ [Gulp](https://github.com/gulpjs/gulp)- A streaming build system, by using node's streams file manipulation is all done in memory, and a file isn't written until you tell it to do so;

and integrate with:

+ [Heroku](https://www.heroku.com/) - Heroku is a platform as a service (PaaS) that enables developers to build and run applications entirely in the cloud, powered by SalesForce;
+ [MongoLAB](https://www.mlab.com/) - Proudly powering over 250,000 MongoDB deployments on AWS, Azure, and Google;

## Getting Started

You might want to run mongod, so your db is up. If you don't have MongoDB installed, see [here](https://www.mongodb.org/). To do this, open a new terminal window and run:

```shell
$ mongod
```

In case you don't have mongoDB set up correctly, take a look [here](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)
Depending on your installation and opperating system, your path may be different, but find the file called mongod.exe and run it, the database should then be set up and listening on port `27017`.

You might want install node dependencies using `npm install`. When the dependencies are ready, you'll be able to run the watcher for file changes and start the server, by either running just: 

```shell 
$ npm run dev
```

Or running gulp and npm start separated:

```shell
$ npm start
```

```shell
$ npm run watch
```

Your Todo app should now be running at [http://localhost:3000/](http://localhost:3000/).

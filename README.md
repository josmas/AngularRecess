AngularRecess
=============

A full rebuild of OpenRecess in Node, Express, Angular, and MongoDB

(reference from OpenRecess description)
Remember recess?  Kids play everyday, but few adults find time for fun and games together. OpenRecess is here to help. On-demand soccer, baseball, volleyball, doubles tennis, tag or any game you can imagine.  What are you playing?

AngularRecess facilitates game management with easy sign-up and email message notifications. Here's a brief overview of the app:

1. Create a game for recess
1. Add email address for friends you want to invite or open enrollment to anyone
1. OpenRecess will notify users via email and process RSVP responses (in progress)
1. OpenRecess will send regular email updates to remind and organize all players (in progress)

##Features

1. OpenRecess is a single page responsive web application
1. Easy-to-use game creation and join game process

##Technologies
1. Express backend for REST calls
1. angular angular-ui-router angular-google-maps frontend
1. Passport.js authentication
1. Mongodb NoSQL database
1. Stylus CSS

##Installation
To install and run this project, follow the following steps:

####Clone Repo
`git clone https://github.com/21tag/AngularRecess.git`

####Install Node Modules
`npm install`

Note: depending on your local environment, it may be necessary to install globally using `sudo npm install -g`

####Install bower_components
Go to AngularRecess/public folder and run `bower install`

####Create local config file.
Copy the file config/sample-config.js into config/config.js

`cp config\sample-config.js config\config.js`

The local config file will not be pushed to the repo so that you can have your own configuration. An example of this would be to modify the port that the app is expecting MongoDB to run on.


####Install and run mongodb (using homebrew)
`brew install mongodb`

`mongod --port 17017` (or most likely `sudo mongod --port 17017`)

(*note*: if you have modified the port in your local config file, use that one.)

####Access to mongo db and look for users
Steps to see users collection in a terminal
`mongo localhost:17017`
`use openRecess`
`show collections`
`db.users.find()`

####Starting the server
`node app.js`

After running node, you should be able to hit the app at `http://localhost:5000`

##Contributors

1. Emily Coco <emilymcoco@gmail.com>
1. Adrian Kim <uknoiluv@gmail.com>
1. Andrew Magliozzi <andrew.magliozzi@gmail.com>


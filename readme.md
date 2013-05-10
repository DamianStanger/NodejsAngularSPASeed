# node.js - Angular - SPA Seed

A seed for a Single Page Application

Technologies: node.js, angular.js, karma, jasmine, mocha, cucumber

## Requirements

### node
 * node.js
 * npm
 * karma
 * Mocha
 * phantom.js
 * jshintRunner

the package.json contains most of what you need to get the node app running run ```npm install```
You then need to make sure karma, mocha and jshintRunner are all installed globally.
Also you need to install phantom.js for the headless browser testing.

### Ruby
 * ruby 1.9.2
 * devKit
 * bundler
 * cucumber
 * capybara

There are probably things that ive missed but doing a ```bundle install``` whilst in the cucumber directory should pull in the gems needed. but you will need to do
a gem install on a couple of gems im not sure why bundler cant manage them, unfortunatly im not a ruby expert.

I tried to get headless browser testing with cucumber working but i had no luck installing cabybara-webkit or poltergeist on my ruby environment, im told its eiser on nix and mac.

## node app
start up the node app by going to the root dir and run ```node app.js```, this needs to be runnig for the cucumber tests to pass

## Tests
To run all the tests go to the root folder and run ```runTests.bat```

## Disclaimer
I developed this seed application on windows 8 ultimate and have not tested it on mac or nix

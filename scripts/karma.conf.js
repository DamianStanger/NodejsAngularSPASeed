/*global JASMINE, JASMINE_ADAPTER*/
/*jshint unused:false*/
"use strict";

var basePath = '../',

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'public/lib/angular/angular.js',
  'public/lib/angular/angular-*.js',
  'testAngular/lib/angular/angular-mocks.js',
  'public/js/**/*.js',
  'testAngular/unit/**/*.js'
],

autoWatch = false,
singleRun = true,

browsers = ['PhantomJS'],

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};

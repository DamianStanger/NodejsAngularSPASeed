"use strict";

var fs = require("fs"),
  path = require("path"),
  jshint = require("jshint").JSHINT;

var args = process.argv;
args.shift();
args.shift();

console.log("Running JsHint on all the *.js files in the following:");
console.log(args);

function processFile(file) {
  if (/\.js$/.test(file)) {
    var fileContents = fs.readFileSync(file, 'utf8');
    var options = {node:true}, globals = {"angular":true, "describe":true, "it":true, beforeEach:true, expect:true, inject:true};
    var success = jshint(fileContents, options, globals);
    if(!success){
      console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
      console.log(file + " failed jshint!");
      console.log(jshint.errors);
      console.log(jshint.data());
      return {"file" : file, "reason" : jshint.reason, "line": jshint.line, "character" : jshint.character};
    }
  }
}

function iterateDir(file) {
  var stat = fs.statSync(file);
  if(stat.isDirectory()) {
    var files = fs.readdirSync(file);
    files.forEach(function(nestedfile) {
      iterateDir(path.join(file, nestedfile));
    });
  } else {
    processFile(file);
  }
}

args.forEach(function(file) {
  iterateDir(file);
});



//return 0 or -1 success or fail
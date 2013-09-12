// Example use of Express and Jade
// Uses the following sub-folder hiearchy
// 
// root
// root -> public/
// root -> public/javascripts/
// root -> public/stylesheets/
// root -> views/

var express = require('express');
var app = express();

var UserHandler = require('./handlers/UserHandler');
var routes = require('./Routes');

var fs = require('fs');

var Logger = require('buynan');

var restify = require('restify')
var server = restify.createServer({ name: 'simpleRESTify' })


var expressLogFile = fs.createWriteStream('./logs/express.log', {flags: 'a'});
// Configuration
app.configure(function(){
  app.use(express.logger({stream: expressLogFile}));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function(){
  app.use(express.errorHandler());
});

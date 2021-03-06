"use strict";

var express = require('express') ,
    routes = require('./routes') ,
    pairing = require('./routes/pairing') ,
    http = require('http') ,
    path = require('path') ,
    lessMiddleware = require('less-middleware');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 1337);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  //app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(lessMiddleware({
      src: __dirname + '/public',
      compress: true
  }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/pairing', pairing.index);
//app.get('/users', user.list);
//app.get('/user/anotherGame', user.anotherGame);
//app.post('/user/create', user.create);
//app.get('/testData/createUsers', testData.createUsers);
//app.post('/user/anotherGame', user.recordNewGame);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

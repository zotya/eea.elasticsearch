/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var nconf = require('nconf');
var template = require('../common/lib/template')

var app = express();

// configuration from config.json
// based on the running environment
var nconfFile = 'conf/' + process.argv[2] + '/config.json';
nconf.file({file: nconfFile});

// all environments
app.set('port', process.env.PORT || nconf.get("http:port"));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('nconf', nconf);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/invalidate_templates', template.invalidate_templates(nconf));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
// Router 
// http://theserver.com/<repo name> --> http://theserver.com:<repo port>
//

var http = require('http');
var static = require('node-static');
var winston = require('winston');
var file = new(static.Server)('.');

// Winston logging setup.
var logger = new winston.Logger;
var  options = {timestamp:true};
logger.add(winston.transports.Console, options);
var config = require('./config.json')['server'];
logger.info(config.toString());
var HOST = config.host;
var port = 80;
var server = http.createServer(function(req,res) {
  logger.info('HTTP request',req.method,req.url);
  switch (req.url)
  {
    default:
      file.serve(req,res);
  }
  logger.info('HTTP respone',res.statusCode);
}).listen(port);
logger.info('HTTP server started.');

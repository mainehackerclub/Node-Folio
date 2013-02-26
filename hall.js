// Router 
// http://theserver.com/<repo name> --> http://theserver.com:<repo port>
//

var http = require('http');
var static = require('node-static');
var file = new(static.Server)('.');

var HOST = 'localhost';
var port = 80;
var server = http.createServer(function(req,res) {
  console.log('HTTP request',req.method,req.url);
  switch (req.url)
  {
    default:
      file.serve(req,res);
  }
  console.log('HTTP respone',res.statusCode);
}).listen(port);

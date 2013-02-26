// Router 
// http://theserver.com/<repo name> --> http://theserver.com:<repo port>
//

var http = require('http');
var static = require('node-static');
var file = new(static.Server)('.');

var HOST = 'localhost';
var port = 80;
var server = http.createServer(function(req,res) {
  console.log('Processing a HTTP request',req.method,req.url);
  switch (req.url)
  {
    // Redirect to the ClickSocket repo.
    case '/click':
        res.statusCode = 302;
        res.setHeader('Location','http://'+HOST+':1337');
        res.end();
        break;
    // Redirect to the leaflet-bangor-example repo.
    case '/leaflet':
        res.statusCode = 302;
        res.setHeader('Location','http://'+HOST+':1338');
        res.end();
        break;
    default:
      file.serve(req,res);
  }
}).listen(port);

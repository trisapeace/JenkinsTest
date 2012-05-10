var http = require('http');

var port = process.env.PORT || 1337;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This is where the lexicon server is growing.  The lexicon server has no public user interface. \n');
}).listen(port);
console.log('Server running at port ' + port + '/');

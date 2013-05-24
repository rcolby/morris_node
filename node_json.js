var http = require('http');

var json = 'callback([{"title": "2009-01","value": 0},{"title": "2009-02","value": 0},{"title": "2009-03","value": 0},{"title": "2009-04","value": 0},{"title": "2009-05","value": 0},{"title": "2009-06","value": 0},{"title": "2009-07","value": 1},{"title": "2009-08","value": 0},{"title": "2009-09","value": 0},{"title": "2009-10","value": 0},{"title": "2009-11","value": 2},{"title": "2009-12","value": 0},{"title": "2010-01","value": 1},{"title": "2010-02","value": 1},{"title": "2010-03","value": 3},{"title": "2010-04","value": 3},{"title": "2010-05","value": 0},{"title": "2010-06","value": 0},{"title": "2010-07","value": 0},{"title": "2010-08","value": 0},{"title": "2010-09","value": 2},{"title": "2010-10","value": 3},{"title": "2010-11","value": 0},{"title": "2010-12","value": 0},{"title": "2011-01","value": 0},{"title": "2011-02","value": 0},{"title": "2011-03","value": 6},{"title": "2011-04","value": 0},{"title": "2011-05","value": 0},{"title": "2011-06","value": 0},{"title": "2011-07","value": 1},{"title": "2011-08","value": 3},{"title": "2011-09","value": 0},{"title": "2011-10","value": 0},{"title": "2011-11","value": 0},{"title": "2011-12","value": 1},{"title": "2012-01","value": 0},{"title": "2012-02","value": 1},{"title": "2012-03","value": 1},{"title": "2012-04","value": 0},{"title": "2012-05","value": 1},{"title": "2012-06","value": 1},{"title": "2012-07","value": 3},{"title": "2012-08","value": 5},{"title": "2012-09","value": 1},{"title": "2012-10","value": 0},{"title": "2012-11","value": 3},{"title": "2012-12","value": 3},{"title": "2013-01","value": 4},{"title": "2013-02","value": 1},{"title": "2013-03","value": 3},{"title": "2013-04","value": 4},{"title": "2013-05","value": 2}])';

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'application/javascript'});
  response.write(json);
  response.end();
});

console.log('Starting server...');
server.listen(80);



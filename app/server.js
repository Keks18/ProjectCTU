const http = require("http");

const fs = require("fs");


http.createServer((req, res) => {
	switch (req.url) {

		case '/': 
    const html = fs.readFileSync('index.html', 'utf8'); 
    res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);

		case '/exmpl.js':
    const js = fs.readFileSync('exmpl.js', 'utf8'); 
		res.writeHead(200, {'Content-Type': 'text/javascript'});
  		res.end(js);	

  //case '/exmpl.js':
    case '/Gistograma.html':
    const gist = fs.readFileSync('Gistograma.html', 'utf8'); 
    res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(gist);

    case '/Gistogr.js':
    const gistjs = fs.readFileSync('Gistogr.js', 'utf8'); 
    res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.end(gistjs);

      case '/data.json':
    const json = fs.readFileSync('data.json', 'utf8'); 
    res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(json);

      case '/data1.json':
    const json1 = fs.readFileSync('data1.json', 'utf8'); 
    res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(json1);

  		default: 
  		res.writeHead(404, {'Content-Type': 'text/plain'});
  		res.end('ERROR 404');
	}
}).listen(3000, () => console.log('server is on'));
//app.listen(3000, () => console.log('Example'));

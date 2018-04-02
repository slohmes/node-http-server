const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log('request ', req.url);

  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.log('error ', err);
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(content, 'utf-8');
    }
  });

}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

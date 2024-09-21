const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    return res.end('welcome to our home page');
  }
  if(req.url === '/about'){
    return res.end('Here is our short history');
  }
  res.end(`
    <h1>Oops</h1>
    <p>Can't seems to find page you are looking for</p>
    <a href="/">Back Home </a>`)
});

server.listen(5000);
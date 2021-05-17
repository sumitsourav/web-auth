const http = require('http');
const url = require("url");
const server = http.createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    if (req.url == '/hello' && req.method == 'GET') {
        res.write("Hello World from 'GET'");
        res.end();
    }
    if (req.url == "/hello" && req.method == "POST") {
        res.write("Hello World from 'POST'");
        res.end();
    }
    if (urlParse.pathname == "/me" && req.method == "GET") {
      res.write(urlParse.query.name);
      res.end();
    }
    if (urlParse.pathname === "/me/hello" && req.method == "GET") {
        res.write("hello " + urlParse.query.name);
        res.end();
    }
    if (/^\/me\/[a-zA-Z]+$/.test(urlParse.pathname) && req.method == "GET") {
      pathname = urlParse.pathname.split("/");
      res.write(pathname[2]);
      res.end();
    }
});

server.listen(7050);

console.log('Listening to port 7050');

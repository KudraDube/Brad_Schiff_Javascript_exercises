const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.end('About page');
    return;  // stop here to avoid running rest of the handler
  }
  
  // Other routes
  res.end('Default response');
});

server.listen(3000, () => console.log('Server running on port 3000'));



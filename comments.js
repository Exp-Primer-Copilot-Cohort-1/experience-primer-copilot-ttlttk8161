// Create web server
// 1. Create server
// 2. Create route
// 3. Create handler function
// 4. Create response

// 1. Create server
const http = require('http')
const server = http.createServer()

// 2. Create route
server.on('request', (req, res) => {
  // 3. Create handler function
  if (req.url === '/comment') {
    res.setHeader('Content-Type', 'application/json')
    // 4. Create response
    res.end(JSON.stringify({ message: 'Hello, this is a comment' }))
  } else {
    res.statusCode = 404
    res.end('404 Not Found')
  }
})

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
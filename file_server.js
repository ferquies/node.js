var http = require('http')
var fs = require('fs')
var bl = require('bl')
var results = ''

var server = http.createServer(function callback (request, response) {
	response.writeHead(200, { 'content-type': 'text/html' })
	response.write("<html><head><style>body { background:#000; color: #FFF; }</style><body>")
	fs.createReadStream(process.argv[3]).pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results = data.toString()
    }))
    response.write("<pre>" + results + "</pre>")
	response.end("</body></html>")
})

server.listen(process.argv[2])
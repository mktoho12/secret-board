'use strict'

const jade = require('jade')

const handle = module.exports.handle = (req, res) => {
  switch(req.method) {
    case 'GET':
	  res.writeHeader(200, {
	    'Content-Type': 'text/html; charset=utf-8'
	  })
	  res.end(jade.renderFile('./views/posts.jade', {}))
	  break
	case 'POST':
      let body = []
      req.on('data', chunk => {
        body.push(chunk)
      }).on('end', () => {
        body = Buffer.concat(body).toString()
        const decoded = decodeURIComponent(body)
        const content = decoded.split(/=/)[1]
        console.log(`投稿されました: ${content}`)
        handleRedirectPosts(req, res)
      })
	  break
	default:
	  break
  }
}

const handleRedirectPosts = (req, res) => {
  res.writeHeader(303, {
    'Locatioin': '/posts'
  })
  res.end()
}


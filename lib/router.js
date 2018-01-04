'use strict'

const postsHandler = require('./posts-handler')

const route = module.exports.route = (req, res) => {
  switch(req.url) {
    case '/posts':
	  postsHandler.handle(req, res)
	  break
	default:
	  break
  }
}


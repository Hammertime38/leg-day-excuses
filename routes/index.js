
/*
 * GET home page.
 */

var excuses = require('../model/excuses.js');
var xml = require('xml');

exports.index = function(req, res){
  var payload = { 
  	excuse: excuses.randomExcuse(), 
  	followUp: excuses.randomFollowUp() 
  };

  if (req.accepts('text/html')) {
  	res.set('Content-Type', 'text/html');
    return res.render('index', payload);
  }
  if (req.accepts('application/json')) {
  	res.set('Content-Type', 'application/json');
  	return res.json(payload)
  }
  else if (req.accepts('application/javascript')) {
  	res.set('Content-Type', 'application/javascript');
  	return res.jsonp(payload);
  }
  res.set('Content-Type', 'text/html');
  res.render('index', payload);
};
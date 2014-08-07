
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

  if (req.accepts('application/json')) {
  	res.set('Content-Type', 'application/json');
  	return res.json(payload)
  }
  res.set('Content-Type', 'text/html');
  res.render('index', payload);
};
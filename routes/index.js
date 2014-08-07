
/*
 * GET home page.
 */

var excuses = require('../model/excuses.js');

exports.index = function(req, res){
  res.render('index', { excuse: excuses.randomExcuse(), followUp: excuses.randomFollowUp() });
};
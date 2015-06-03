'use strict';

var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Garden = mongoose.model('Garden'),
	_ = require('lodash');

exports.create = function(req, res) {
	var garden = new Garden(req.body);

	garden.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(garden);
		}
	});
};


exports.read = function(req, res) {
	res.json(req.garden);
};


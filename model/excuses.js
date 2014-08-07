
var _ = require("underscore");

module.exports = {
	randomExcuse: function() {
		var excuses = [
			"You're losing your pump, bro.",
			"Didn't you just run, like, at least a day ago or something?",
			"Do you want the girls at the party to check out those python barrels or your thunder thighs?",
			"Your legs are still sore from last time; do you really want to risk it?",
			"Did you just feel that earthquake?",
			"Your chest is looking pretty small, bro.",
			"That lower back pain isn't gonna get any better from squats."
		];
		return _.shuffle(excuses)[0];
	},

	randomFollowUp: function() {
		var followUps = [
			"You should probably skip leg day.",
			"You might wanna skip leg day.",
			"I wouldn't do legs if I were you.",
			"Just do leg day this weekend or something.",
			"You should probably do a few sets of hammer curls for good measure.",
		];
		return _.shuffle(followUps)[0];
	}
}
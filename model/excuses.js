
var _ = require("underscore");

module.exports = {
	randomExcuse: function() {
		var excuses = [
			"You're losing your pump, bro.",
			"Didn't you just run this morning?",
			"Do you want the girls at the party to check out those python barrels or your thunder thighs?",
			"Your legs are still sore from last time; do you really want to risk it?",
			"Did you just feel that earthquake?",
			"Your chest is looking pretty small, bro.",
			"That lower back pain isn't gonna get any better from squats.",
			"You can't do legs on a full stomach, what are you thinking!?",
			"You really don't do enough core, bro.",
			"You just aren't feelin it today. We understand.",
			"Your legs are feeling a little wobbly. Protect that knee, bro.",
			"All of your friends are doing shoulders and tris. You really wanna be the Debby Downer?",
			"Did you go to the gym to look good or to rip your pants?",
			"The racks are always filled up by now, so you'll probably just be wasting your time anyways.",
			"The gun show is tomorrow."
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
			"Yeah. Leg day aint today.",
			"Some days are perfect days for legs. Today isn't one of those days.",
			"Just go on a hike. That's basically the same thing, right?",
			"Now jump on that bench and start shredding."
		];
		return _.shuffle(followUps)[0];
	}
}
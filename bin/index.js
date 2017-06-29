#!/usr/bin/env node

const program = require('commander'),
	play = require('../lib/play');

program
	.option('-b, --band [type]', 'Pass Band Name')
	.parse(process.argv);

play({
	band: program.band
}, (err, done) => {
	if (err) throw err;
});
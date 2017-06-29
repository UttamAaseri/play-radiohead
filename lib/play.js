const open = require("open"),
	request = require('request'),
	cheerio = require('cheerio');

const YOUTUBE = 'https://www.youtube.com/';

module.exports = function(opt, _cb) {
	var band = opt.band || 'radiohead';
	var queryUrl = YOUTUBE + 'results?search_query=' + band;
	request(queryUrl, (err, res, body) => {
		if (err || res.statusCode != 200) return _cb(err);
		var $ = cheerio.load(body);
		var playlistPath = $('#search-secondary-col-contents').find('a')[1].attribs.href;
		open(YOUTUBE + playlistPath);
	})
}
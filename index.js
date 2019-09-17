require('babel-core/register')({
	cache: false,
});

require('babel-polyfill');


require('./server/app.js');

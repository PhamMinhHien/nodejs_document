const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);


// This is executed after about 4 seconds.
const vl = "foobar"
setTimeoutPromise(4000, vl).then((value) => {
	clearTimeout(2000)
	console.log(value);
});

/* 
	Buffer (class)
	__dirname
	__filename
	exports 
	module
	require()

*/
var concat = require('concat');
var compressor = require('node-minify');

var sources = [
	'../src/lib_utils.js',
	'../src/lib_socials.js',
	'../src/lib_gameservice.js',
	'../src/vendors/lib_xtralife.js',			// Exclude if not needed
	'../src/vendors/lib_crazygames.js',			// Exclude if not needed
	'../src/vendors/lib_gamedistribution.js',	// Exclude if not needed
	'../src/vendors/lib_googleanalytics.js',	// Exclude if not needed
	'../src/lib_ads.js',
	'../src/lib_payments.js',
	'../src/lib_analytics.js',
	'../src/fbinstantx.js',
	'../src/fbinstantx_ext.js',
];

concat(sources, "../lib/igx_debug.js").then(function()
{
	compressor.minify({
		compressor: "babel-minify",
		input: [
			"../lib/igx_debug.js",
		],
		output: "../lib/igx_min.js",
		options: {
			//language: "ECMASCRIPT6",
			/*warnings: true,
			mangle: true,
			compress: true*/
		},
		callback: function (err, min)
		{
			console.log(err);
		}
	});
});
 

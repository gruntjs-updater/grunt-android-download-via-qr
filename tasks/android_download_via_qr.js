/*
* grunt-android-download-via-qr
* https://github.com/kjprice/grunt-android-download-via-qr
*
* Copyright (c) 2015 KJ
* Licensed under the MIT license.
*/


var qrDownload = require('android-download-via-qr');
var fs = require('fs');

module.exports = function(grunt) {
'use strict';
	grunt.registerMultiTask('android_download_via_qr', 'Download your android app via a QR code', function() {
		var done = this.async();

		var androidDirectory = this.data.options.androidDirectory || 'android-test/';
		if (!androidDirectory.match(/\/$/)) {
			androidDirectory = androidDirectory + '/';
		}

		qrDownload(androidDirectory, {dontOpen:false}, function (err) {
			if (err) { return grunt.log.error(err); }
			done();
		});

	});

};

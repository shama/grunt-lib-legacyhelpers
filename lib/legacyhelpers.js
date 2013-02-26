/*
 * grunt-lib-legacyhelpers
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

exports.init = function(grunt) {
  'use strict';

  var helper = require('grunt-lib-contrib').init(grunt),
               uglifyjs = require('uglify-js');

  var exports = {};

  // Concat source files and/or directives.
  exports.concat = function(files, options) {
    options = grunt.util._.defaults(options || {}, {
      separator: grunt.util.linefeed
    });
    return files ? files.map(function(filepath) {
      return grunt.file.read(filepath);
    }).join(grunt.util.normalizelf(options.separator)) : '';
  };

  // Return gzipped source.
  exports.gzip = function(src) {
    return src ? gzip.zip(src, {}) : '';
  };

  // Output some size info about a file.
  exports.min_max_info = helper.minMaxInfo;

  // Return minified content as string
  exports.uglify = function(content, options) {
    var result;

    options = options || {};
    options['fromString'] = true;
    result = uglifyjs.minify(content, options);
    return result.code;
  };

  return exports;
};

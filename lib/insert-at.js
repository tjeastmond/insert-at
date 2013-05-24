/*!
 * Insert-At.js - v1.0.0
 * A simple array insertion mixin for Underscore
 * TJ Eastmond - tj@swoo.io
 * Copyright 2013 
 */

(function() {
  var exports, insertAt, isNode, _;

  isNode = typeof module !== 'undefined';

  if (isNode === true) {
    _ = require('underscore');
  }

  insertAt = function(array, item, at) {
    if (Object.prototype.toString.call(array) !== '[object Array]') {
      return false;
    }
    if (at >= array.length) {
      at = array.length;
    }
    array.splice(at, 0, item);
    return array;
  };

  if (typeof _ !== 'undefined') {
    _.mixin({
      insertAt: insertAt
    });
  }

  if (isNode === true) {
    exports = module.exports = insertAt;
  } else {
    this.insertAt = insertAt;
  }

}).call(this);

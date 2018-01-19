"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var insertAt = function insertAt(array, insert, at) {
  var newArray = [].concat(_toConsumableArray(array));
  var position = at >= newArray.length ? newArray.length : at;
  newArray.splice(position, 0, insert);
  return newArray;
};

exports.default = insertAt;
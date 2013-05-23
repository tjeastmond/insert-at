# Insert-At.coffee
# TJ Eastmond - tj.eastmond@gmail.com
# Copyright 2013

isNode = typeof module isnt 'undefined'

_ = require 'underscore' if isNode is true

insertAt = (array, item, at) ->
	return false unless Object.prototype.toString.call(array) is '[object Array]'
	at = array.length if at >= array.length
	array.splice at, 0, item
	array

_.mixin insertAt: insertAt

if isNode is true
	exports = module.exports = insertAt
else
	this.insertAt = insertAt

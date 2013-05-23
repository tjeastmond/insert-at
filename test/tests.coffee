# Insert-At.coffee
# TJ Eastmond - tj.eastmond@gmail
# Copyright 2013

_ = require 'underscore'
insertAt = require '../index'

describe 'The function exists', ->
	it 'and should be mixedin to Underscore', ->
		insertAt.should.be.a 'function'
		_.insertAt.should.be.a 'function'

describe 'InsertAt', ->
	beforeEach -> @testArray = ['tj', 'melissa', 'ash']

	it 'should insert an item into the array', ->
		a = _.insertAt @testArray, 'figs', 1
		a.should.have.length 4
		a[1].should.equal 'figs'

	it 'should add an item to the begining of the array', ->
		a = _.insertAt @testArray, 'figs', 0
		a.should.have.length 4
		a[0].should.equal 'figs'

	it 'should add an item to the end of the array', ->
		a = _.insertAt @testArray, 'figs', 3
		a.should.have.length 4
		a[3].should.equal 'figs'

	it 'should adjust insert point if it is larger than array length', ->
		a = _.insertAt @testArray, 'figs', 20
		a.should.have.length 4
		a[3].should.equal 'figs'

	it 'should fail if the first argument is not an array', ->
		_.insertAt('string', 'figs', 0).should.be.false



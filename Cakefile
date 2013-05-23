# Build out source
# TJ Eastmond - tj@swoo.io
# Copyright 2013

fs = require 'fs'
uglify = require 'uglify-js'
coffee = require 'coffee-script'
{spawn} = require 'child_process'

banner = "/*!\n * Insert-At.js - v1.0.0\n * A simple array insertion mixin for Underscore\n " +
		 "* TJ Eastmond - tj@swoo.io\n * Copyright 2013 \n */\n\n"

task "watch", "watch and build the source", ->
	compiler = spawn 'coffee', [ '-o', './lib', '-cw', './src' ]
	compiler.stdout.on 'data', (data) -> console.log data.toString().trim()
	compiler.stderr.on 'data', (data) -> console.error data.toString().trim()

task "build", "build out the production version of source", ->
	src = coffee.compile fs.readFileSync('./src/insert-at.coffee').toString()
	min = uglify.minify src, fromString: true
	fs.writeFileSync './lib/insert-at.js', banner + src, 'utf8'
	fs.writeFileSync './lib/insert-at.min.js', banner + min.code, 'utf8'
	console.log 'Script built and minified'



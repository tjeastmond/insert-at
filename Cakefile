fs = require 'fs'
uglify = require 'uglify-js'
coffee = require 'coffee-script'
{spawn} = require 'child_process'

task "watch", "watch and build the source", ->
	compiler = spawn 'coffee', [ '-o', './lib', '-cw', './src' ]
	compiler.stdout.on 'data', (data) -> console.log data.toString().trim()
	compiler.stderr.on 'data', (data) -> console.error data.toString().trim()
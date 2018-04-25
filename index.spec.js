var log = require('ulog')('preact-cli-decss:spec')
var expect = require('chai').expect
var configureDecss = require('./')

describe('configureDecss(config, helpers, ext=\'de.css\')', function(){
	it('is a function', function(){
		expect(configureDecss).to.be.a('function')
	})

	it('expects two formal and one default parameter', function(){
		expect(configureDecss.length).to.eq(2)
	})

	it('accepts a preact config as first parameter', function(){
		var cfg = {
			module: {
				loaders: [
					{test: /some-test-pattern/, loader:'some-dummy-loader-chain'},
					{test: /\.(css|less|sass)$/, loader:'some-css-loader-chain'},
				]
			}
		}
		expect(() => configureDecss(cfg)).not.to.throw()
	})

	it('accepts a preact config helpers object as second parameter', function(){
		var cfg = {
			module: {
				loaders: [
					{test: /some-test-pattern/, loader:'some-dummy-loader-chain'},
					{test: /\.(css|less|sass)$/, loader:'some-css-loader-chain'},
				]
			}
		}
		var helpers = {}
		expect(() => configureDecss(cfg, helpers)).not.to.throw()
	})

	it('accepts a file extension as third parameter', function(){
		var cfg = {
			module: {
				loaders: [
					{test: /some-test-pattern/, loader:'some-dummy-loader-chain'},
					{test: /\.(css|less|sass)$/, loader:'some-css-loader-chain'},
				]
			}
		}
		var helpers = {}
		var ext = 'some.ext'
		expect(() => configureDecss(cfg, helpers, ext)).not.to.throw()
	})

	it('returns the modified configuration object', function(){
		var cfg = {
			module: {
				loaders: [
					{test: /some-test-pattern/, loader:'some-dummy-loader-chain'},
					{test: /\.(css|less|sass)$/, loader:'some-css-loader-chain'},
				]
			}
		}
		var helpers = {}
		var ext = 'some.ext'
		var result
		expect(() => result = configureDecss(cfg, helpers, ext)).not.to.throw()
		expect(result).to.eq(cfg)
	})

	it('ignores the helpers parameter', function(){
		var cfg = {
			module: {
				loaders: [
					{test: /some-test-pattern/, loader:'some-dummy-loader-chain'},
					{test: /\.(css|less|sass)$/, loader:'some-css-loader-chain'},
				]
			}
		}
		var helpers = undefined
		expect(() => configureDecss(cfg, helpers)).not.to.throw()
	})

	it('defaults the file extension to \'de.css\'', function(){
		var cfg = {
			module: {
				loaders: [
					{test: /some-test-pattern/, loader:'some-dummy-loader-chain'},
					{test: /\.(css|less|sass)$/, loader:'some-css-loader-chain'},
				]
			}
		}
		var helpers = {}
		var result
		expect(() => result = configureDecss(cfg, helpers)).not.to.throw()
		expect(result.module.loaders.length).to.eq(3)
		expect(result.module.loaders[0].test.source).to.eq('\\.de\\.css$')
	})
})

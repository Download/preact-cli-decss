/**
 * Modifies the given Preact config, adding the decss loader
 * for any files with the given extension.
 *
 * @param {object} config The Preact CLI configuration object to modify
 * @param {object} helpers The Preact CLI configuration helpers (part of plugin interface, but not used)
 * @param {string} ext Optional extension used for decss files. Defaults to 'de.css'. Do not include the leading dot. Avoid using just 'css', unless all of your css stylesheets are compatible with decss.
 *
 * @return {object} The modified configuration object
 */
function configureDecss(config, helpers, ext = 'de.css') {
	ext = ext.replace('.', '\\.');
	config.module.loaders
		// find the default loader chain for CSS files that includes the components folder
		.filter(l => l.include && l.test && 'test.css'.match(l.test))
		// modify default loader chain to include files with given ext
		.forEach(l => l.test = new RegExp(l.test.source.replace(/\(css\|/, '(css|' + ext + '|')));
	// insert decss loader only for *.cmp.css files
	config.module.loaders.splice(0, 0, {
		test: new RegExp('\\.' + ext + '$'),
		loader: 'decss-loader/preact'
	});
	return config;
}

// ES6 export was only introduced in Node JS since 8.5.0
// So to avoid complex build setupw, we just use module.exports
module.exports = configureDecss;

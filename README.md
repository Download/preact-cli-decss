# preact-cli-decss
**Preact CLI configuration plugin for decss**

[![npm](https://img.shields.io/npm/v/preact-cli-decss.svg)](https://npmjs.com/package/preact-cli-decss)
[![license](https://img.shields.io/npm/l/preact-cli-decss.svg)](https://opensource.org/licenses/MIT)
[![travis](https://img.shields.io/travis/Download/preact-cli-decss.svg)](https://travis-ci.org/Download/preact-cli-decss)
![mind BLOWN](https://img.shields.io/badge/mind-BLOWN-ff69b4.svg)

## About
This is a configuration [plugin](https://github.com/developit/preact-cli/wiki/Plugins) for [Preact CLI](https://github.com/developit/preact-cli) that adds the [decss-loader](https://github.com/kossnocorp/decss-loader#readme) to the underlying Webpack configuration, enabling [decss](https://github.com/kossnocorp/decss#readme) awesomeness in your Preact CLI project.

## Install

```sh
npm install --save preact-cli-decss
```

## Usage
Just import the `configureDecss` function and use it in your *preact.config.js*:

```js
import configureDecss from 'preact-cli-decss';

export default (config, env, helpers) => {
	configureDecss(config);
	// .. other config changes here
	return config;
};
```

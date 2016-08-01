var path = require("path");

function config() {
	return {
		entry: {
			whitelabel: "./clients/scripts/whitelabel/import.js"
		},
		output: {
			path: path.join(__dirname, "./clients/default/catalog/view/theme/whitelabel"),
			filename: "test.js"
		},
		module: {
			loaders: [
				{test: /\.js/, loader: "babel", exclude: /node_modules/}
			]
		}
	}
}

module.exports = config();
module.exports.clone = config;
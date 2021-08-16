const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "production",
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "src/public", to: "." },
				{ from: "src/styles", to: "styles" },
				{ from: "src/assets", to: "assets" },
			],
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: false,
		port: 8080,
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'none',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
	publicPath: '/dist/'
  },
  experiments: {
    topLevelAwait: true
  },
  plugins: [
	  new MiniCssExtractPlugin({
		  filename: "[name].css",
	  }),
	],
  resolve: {
    extensions: ['.js']
	},
	module: {
			rules: [{
				test: /\.(js)$/i,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ['@babel/plugin-syntax-top-level-await']
					}
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/i,
				sideEffects: true,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader', 
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							sassOptions: {
								outputStyle: "compressed",
							},
						},
					},
				],
			}
	]},
};
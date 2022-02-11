const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
	publicPath: '/dist/'
  },
  plugins: [
	  new MiniCssExtractPlugin({
		  filename: "[name].css",
	  }),
	],
  resolve: {
    extensions: ['.js', '.jsx']
	},
	module: {
			rules: [{
				test: /\.(jsx|js)$/i,
				exclude: /(node_modules)/,
				use: ['babel-loader']
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
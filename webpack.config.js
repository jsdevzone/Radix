 'use strict';

var path = require('path');
var webpack = require('webpack');

/**
 * This moves css into separate files instead of embedding into javascript.
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var config = module.exports = {
	context: __dirname,
	devtool: 'source-map',
	debug: true,

	/**
	 * Webpack dev server configuration
	 */
	devServer: {
		historyApiFallback: true,
		contentBase: './src/public',
		publicPath: '/build'
	},

	entry: {
		'vendor': [
            'react',
            'react-routing',
            'react-dom',
			'jquery'
        ],
		'app': './src/app.js'
	},

	output: {
		path: './build/public',
		filename: '[name].js',
		courceMapFilename: '[name].map.js',
		chunkFileName: '[id].chunk.js'
	},

	resolve: {
		alias: {
			'jquery': path.join(__dirname, './node_modules/jquery/dist/jquery.js'),
	   		'bootstrap': path.join(__dirname, './node_modules/bootstrap/dist'),
			'font-awesome': path.join(__dirname, './node_modules/font-awesome'),
			'styles': path.join(__dirname, './src/assets/less'),
            'app':  path.join(__dirname, './src/app/components/app'),
			'ux':  path.join(__dirname, './src/app/components/ux'),
			'lib': path.join(__dirname, './src/lib'),
            'animatecss': path.join(__dirname, './node_modules/animate.css/animate.css')
   		},
        extensions: [ '', '.js', '.jsx', '.css', '.scss', '.less', '.html', '.json' ],
        moduleDirectories: ['node_modules']
    },

	module: {
		loaders: [
			{ test: /\.json$/, loader: 'json-loader' },
		    { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader?sourceMap", "css-loader?sourceMap") },
			{ test: /\.html$/, loader: 'raw' },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      		{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=fonts/[name].[ext]" },
            { test: /\.(png|jpg|jpeg|gif|svg?$)/, loader: "file-loader?name=images/[name].[ext]" },
			{
			   test: /\.scss$/,
			   loaders: ["style", "css?sourceMap", "sass?sourceMap"]
		    },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap!' +
                    'less?sourceMap'
                )
            },
			{ test: /\.js$/,
                include: path.join(__dirname, 'src'),
                 exclude: /(node_modules|bower_components)/,
                 loader: 'babel?presets[]=react,presets[]=es2015'
            }
		]
	},

	plugins: [
        new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
        new CommonsChunkPlugin({ name: 'common', filename: 'common.js'}),
		new ExtractTextPlugin("style.css"),
		new webpack.ProvidePlugin({
			"$": "jquery",
			"jQuery": "jquery"
		})
	]

};

module.exports = config;

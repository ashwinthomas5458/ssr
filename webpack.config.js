const path = require( 'path' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

/*-------------------------------------------------*/

module.exports = {
    // entry files
    entry: './src/index.js',

    // output files and chunks
    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: 'public/[name].js',
    },

    // module/loaders configuration
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            }
        ]
    },

    // webpack plugins
    plugins: [

        // extract css to external stylesheet file
        new MiniCssExtractPlugin( {
            filename: 'public/styles.css'
        } ),

        // prepare HTML file with assets
        new HTMLWebpackPlugin( {
            filename: 'index.html',
            template: path.resolve( __dirname, 'src/index.html' ),
            minify: true,
        } ),

        // // copy static files from `src` to `dist`
        // new CopyWebpackPlugin( {
        //     patterns: [
        //         {
        //             from: path.resolve( __dirname, 'src/assets' ),
        //             to: path.resolve( __dirname, 'dist/assets' )
        //         }
        //     ]
        // } ),
    ],

    // resolve files configuration
    resolve: {
        
        // file extensions
        extensions: [ '.js', '.jsx', '.scss', '.css' ],
    },

    // webpack optimizations
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                
                vendor: {
                    chunks: 'all', // both : consider sync + async chunks for evaluation
                    name: 'vendor', // name of chunk file
                    test: /node_modules/, // test regular expression
                }
            }
        }
    },

    // development server configuration
    devServer: {
        port: 8088,
        historyApiFallback: true,
    },

    // generate source map
    devtool: 'source-map'

};
// const path = require('path');
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'app.js',
//         path: path.resolve(__dirname, 'build/public')
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 loader: require.resolve('babel-loader'),
//                 exclude: /node-modules/
//             }
//         ]
//     }
// }
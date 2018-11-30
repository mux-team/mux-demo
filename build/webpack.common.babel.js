import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlwebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import nib from 'nib';

const isProduct = process.env.NODE_ENV === 'production';

export default {
    // 页面入口文件配置
    entry: {
        index: path.resolve(__dirname, '../src/index.js')
    },
    // output 项告诉 webpack 怎样存储输出结果以及存储到哪里
    output: {
        // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        // path 仅仅告诉 Webpack 结果存储在哪里
        path: path.resolve(__dirname, '../dist'),
        filename: !isProduct ? '[name].js' : '[name].[chunkhash:8].js',
        // 构建后在 html 里的路径，一般也是用这个来指定上线后的cdn域名
        // http://webpack.github.io/docs/configuration.html#output-publicpath
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        stylus: ExtractTextPlugin.extract({
                            use: [
                                'css-loader',
                                'stylus-loader?paths=node_modules&resolve url&include css'
                            ],
                            fallback: 'vue-style-loader',
                            publicPath: './'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', "stage-0"]
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'stylus-loader?paths=node_modules&resolve url&include css'
                    ],
                    fallback: 'style-loader',
                    publicPath: './'
                })
            },
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader?paths=node_modules&resolve url&include css'
                    ],
                    publicPath: './'
                })
            },
            {
                test: /favicon\.ico$/,
                loader: 'file-loader',
                query: {
                    limit: 1,
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(jpg|png|gif|webp)$/,
                loader: ['url-loader?limit=1024&name=img/[name].[hash:8].[ext]']
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                loader: ['file-loader?name=font/[name].[hash:8].[ext]']
            }
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.vue'],
        // 如果不是相对路径，则先将 src 当做根目录，找不到时再将 node_modules 当做跟目录
        modules: [
            path.resolve(__dirname, '../src'),
            'node_modules'
        ]
    },
    plugins: [
        // stylus 引入 nib 库
        new webpack.LoaderOptionsPlugin({
            options: {
                stylus: {
                    'use': [nib()],
                    'import': ['~nib/lib/nib/index.styl']
                }
            }
        }),
        // 将 css 从 js 抽取出来，不杂糅在 js 中
        new ExtractTextPlugin(!isProduct ? '[name].css' : '[name].[chunkhash:8].css'),

        new HtmlwebpackPlugin({
            chunks: ['index'],
            alwaysWriteToDisk: true,
            filename: `entry/index.html`,
            inject: true,
            hash: false,
            favicon: 'src/common/images/favicon.ico',
            template: path.resolve(__dirname, `../entry/index.html`),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new HtmlWebpackHarddiskPlugin()
    ]
};

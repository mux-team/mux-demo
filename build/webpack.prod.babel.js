import webpack from 'webpack';
import commonConf from './webpack.common.babel';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    comments: false
});

const cssCompressPlugin = new OptimizeCssAssetsPlugin({
    autoprefixer: {
        remove: false
    },
    assetNameRegExp: /.*\.css$/g
});

const definePlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: '"production"'
    }
});

let plugins = commonConf.plugins;
plugins.push(uglifyPlugin, cssCompressPlugin, definePlugin);

// 线上地址todo
commonConf.output.publicPath = '/mux-demo/webroot/dist/';

export default Object.assign({}, commonConf, {
    plugins
});

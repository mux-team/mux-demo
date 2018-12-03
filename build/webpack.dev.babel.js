import path from 'path';
import webpack from 'webpack';
import commonConf from './webpack.common.babel';


const definePlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: '"development"'
    }
});

commonConf.plugins.push(definePlugin);

export default Object.assign({}, commonConf, {
    devServer: {
        contentBase: path.resolve(__dirname, '../'),
        compress: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 8808,
        publicPath: '/dist/',
        setup(app) {
        },
        staticOptions: {
            setHeaders(res, path) {
                if (/^\/oauth\//ig.test(path)) {
                    res.set('Content-Type', 'text/html;charset=utf-8');
                }
            }
        }
    },
    devtool: '#eval-source-map'
});

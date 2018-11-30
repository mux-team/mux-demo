
// es6使用时产生的问题：https://github.com/webpack/webpack/issues/2776

/* eslint-disable */
if (process.env.NODE_ENV === 'production') {
    // TODO 线上地址
    __webpack_public_path__ = '/';
}

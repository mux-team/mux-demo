import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/Index';
import Home from '../views/client/home/index';

import ImageViewer1 from '../views/client/imageViewer/demo1';
import ImageViewer2 from '../views/client/imageViewer/demo2';
import ImageViewer3 from '../views/client/imageViewer/demo3';
import ImageViewer4 from '../views/client/imageViewer/demo4';
import ImageViewer5 from '../views/client/imageViewer/demo5';
import Error from '../views/Error';


Vue.use(Router);
Vue.config.productionTip = false;
let router = new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/imageViewer1',
            component: ImageViewer1
        },
        {
            path: '/imageViewer2',
            name: 'ImageViewer2',
            component: ImageViewer2
        },
        {
            path: '/imageViewer3',
            name: 'ImageViewer3',
            component: ImageViewer3
        },
        {
            path: '/imageViewer4',
            name: 'ImageViewer4',
            component: ImageViewer4
        },
        {
            path: '/imageViewer5',
            name: 'ImageViewer5',
            component: ImageViewer5
        },
        {
            path: '/error',
            name: 'error',
            component: Error
        },
        {
            path: '*',
            redirect: '/error'
        }
    ]
});

export default router;
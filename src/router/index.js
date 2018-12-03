import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/Index';
import Home from '../views/client/home/index';

import ImageViewer from '../views/client/imageViewer/index';
import ImageViewer1 from '../views/client/imageViewer/demo1';
import ImageViewer2 from '../views/client/imageViewer/demo2';
import ImageViewer3 from '../views/client/imageViewer/demo3';
import ImageViewer4 from '../views/client/imageViewer/demo4';
import ImageViewer5 from '../views/client/imageViewer/demo5';

import touchActive from '../views/client/touchActive/index';
import touchActive1 from '../views/client/touchActive/demo1';
import touchActive2 from '../views/client/touchActive/demo2';
import touchActive3 from '../views/client/touchActive/demo3';

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
            path: '/touchActive',
            component: touchActive,
            children: [
                {
                    path: '1',
                    component: touchActive1
                },
                {
                    path: '2',
                    component: touchActive2
                },
                {
                    path: '3',
                    component: touchActive3
                }
            ]
        },
        {
            path: '/imageViewer',
            component: ImageViewer,
            children: [
                {
                    path: '1',
                    component: ImageViewer1
                },
                {
                    path: '2',
                    name: 'ImageViewer2',
                    component: ImageViewer2
                },
                {
                    path: '3',
                    name: 'ImageViewer3',
                    component: ImageViewer3
                },
                {
                    path: '4',
                    name: 'ImageViewer4',
                    component: ImageViewer4
                },
                {
                    path: '5',
                    name: 'ImageViewer5',
                    component: ImageViewer5
                }
            ]
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
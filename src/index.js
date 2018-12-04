import 'babel-polyfill';
import 'common/publicPath';
import Vue from 'vue';
import router from './router/index';
import Index from './views/Index';
import {TouchActive, TouchStop, ResponsiveLink} from 'mux-vue-touch-active';

Vue.config.productionTip = false;
Vue.use(TouchActive);
Vue.use(TouchStop);
Vue.prototype.ResponsiveLink = ResponsiveLink;

new Vue({
    router,
    el: '#app',
    template: '<Index/>',
    components: {Index}
});

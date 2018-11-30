import 'babel-polyfill';
import 'common/publicPath';
import Vue from 'vue';
import router from './router/index';
import Index from './views/Index';

Vue.config.productionTip = false;


new Vue({
    router,
    el: '#app',
    template: '<Index/>',
    components: {Index}
});

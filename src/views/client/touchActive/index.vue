<template>
    <div class="main" id="main">
        <router-view :rs="rs"></router-view>
    </div>
</template>

<script>
import {ResponsiveLink} from 'mux-vue-touch-active';

export default {
    data() {
        return {
            rs: {}
        }
    },
    mounted() {
        this.rs = new ResponsiveLink({
            $root: '#main'
        });
        this.rs.start();
    }
}
</script>

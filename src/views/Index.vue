<template>
    <div class="main" id="main">
        <transition :name="transitionName">
        <router-view></router-view>
        </transition>
    </div>
</template>
<script>

export default {
    data() {
        return {
            transitionName: ''
        }
    },
    mounted () {
        const ResponsiveLink = this.ResponsiveLink;

        const rs = new ResponsiveLink({
            $root: '#main'
        });
        rs.start();
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length;
            const fromDepth = from.path.split('/').length;
            // 其余是左滑右滑
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        }
    }
}
</script>
<style lang="stylus" scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-bottom-enter-active,
.slide-top-enter-active,
.slide-top-leave-active,
.slide-bottom-leave-active
    width 100%
    height 100%
    transition: all 350ms
    position absolute

.slide-right-enter
    transform translate(-100%, 0)

.slide-right-leave-active
    transform translate(100%, 0)

.slide-bottom-leave-active
    transform translate(0, 100%)
    z-index 1000

.slide-top-enter
    transform translate(0, 100%)

.slide-left-enter
    transform translate(100%, 0)

.slide-left-leave-active
    transform translate(-100%, 0)

</style>

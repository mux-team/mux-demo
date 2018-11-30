<template>
    <div ref="root" id="test">
        <touchActive isJump expand url="/dist/entry#/home">
            <div>ddddddddd</div>
        </touchActive>

        <touchActive url="/dist/entry#/home">
            <div>ddddddddd</div>
        </touchActive>
    </div>
</template>

<script>
import touchActive from 'components/touchActive/touchActive';
export default {
    components: {
        touchActive
    },
    beforeRouteLeave(to, from, next) {
        debugger
    }
}
</script>

<style lang="stylus" scoped>

</style>



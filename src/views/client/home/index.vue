<template>
    <div class="main">
        <h2>图片示例</h2>
        <ul>
            <li v-for="(imgItem, index) in img" :key="imgItem" @click="goto(index)">{{imgItem}}</li>
        </ul>

        <h2>点击态</h2>
        <touch-active>
        </touch-active>
        <touch-active
            isJump
            :top="-5"
            :left="-5"
            :bottom="-5"
            :right="-5"
            borderRadius="5px"
            backgroundColor="rgba(255,0,255,0.1)">
            <router-link tag="li" to="/touchActive/1">
                touchActive
            </router-link>
        </touch-active>
    </div>
</template>
<script>
    export default {
        name: 'index',
        components: {
        },
        data() {
            return {
                img: [
                    'imageViewer1',
                    'imageViewer2',
                    'imageViewer3',
                    'imageViewer4',
                    'imageViewer5',
                ]
            };
        },
        methods: {
            goto(index) {
                this.$router.push(`/imageViewer/${index+1}`);
            },
            gotoTouchActive() {
                this.$router.push(`/touchActive/2`);
            }
        }
    };
</script>
<style lang="stylus" scoped>
.alink
    display inline-block
    padding 10px
    background-color yellow

    &:active
        background-color red
</style>

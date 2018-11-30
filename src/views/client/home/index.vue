<template>
    <div class="main">
        <h2>图片示例</h2>
        <ul>
            <li v-for="(imgItem, index) in img" :key="imgItem" @click="goto(index)">{{imgItem}}</li>
        </ul>

        <h2>点击态</h2>
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
                this.$router.push(`/imageViewer${index+1}`);
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

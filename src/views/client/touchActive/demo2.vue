<template>
    <div class="example-container" id="main">
        <touch-active class="container result" url="http://www.baidu.com">
            <h2>常用配置</h2>
            <div>通过设置组件传入的props的backgroundColor属性、borderRadius、top、left、right、bottom个性化设置点击态效果</div>
            <touch-active class="example-link"
                backgroundColor="rgba(220,20,60,0.1)"
                borderRadius="5"
                :top=-5
                :left=-5
                :right=-5
                :bottom=-5
                url="http://www.163.com">
                <div>点击此div跳转到http://www.163.com</div>
            </touch-active>
        </touch-active>
    </div>
</template>

<style lang="stylus" scoped>
@import "../../../common/css/base.styl";

h2
    font-size 16px
    font-weight 700
    margin-bottom 10px

.example-container
    background-color #f5f5f5
    padding 0
    line-height 24px

.container
    margin-bottom 20px
    padding 10px
    background #fff
    min-height 200px

    a
        display inline-block
        padding 5px 15px
        background #f5f5f5
        border-radius 3px
        margin 5px

    .example-title
        margin-bottom 10px

    .example-link
        padding 5px 15px
        margin-bottom 10px
        display inline-block
        background-color #f5f5f5

    .example-button
        padding 3px 5px
        margin-bottom 10px
        display inline-block
        background-color #f5f5f5

    .stop
        background-color rgba(255,0,0,0.1)
        padding 5px


</style>
<template>
    <div class="right-bar">
        <div class="rightbar-item">
            <div class="avatar-border">
                <img src="../../static/img/xxx.jpg" alt="" >
                <span class="iconfont icon-jia"></span>
            </div>
        </div>
        <div class="item-icon">
            <span class="iconfont icon-aixin"></span>
            <p>18.0w</p>
        </div>
        <div class="item-icon" @click.stop="showCom($event)">
            <span class="iconfont icon-pinglun"></span>
            <p>18.0w</p>
        </div>
        <div class="item-icon">
            <span class="iconfont icon-fenxiang"></span>
            <p>18.0w</p>
        </div>
        <div class="rightbar-item">
            <div class="right-music">
                <img src="../../static/img/xxx.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["showComment"],
    methods:{
        showCom(e){
            e.preventDefault();
            this.$emit('changeCom',this.showComment)
        }
    }
}
</script>
<style scoped>
    .right-bar{
        width:80px;
        /* border: 1px red solid; */
    }
    .right-bar .rightbar-item{
        height: 60px;
        widows: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
    }
    .avatar-border{
        height: 50px;
        border: 1px #fff solid;
        border-radius: 50%;
        position: relative;
        text-align: center;
    }
    .avatar-border img{
        width: 49px;
        height: 49px;
        border-radius: 50%;
    }
    .avatar-border .icon-jia{
        font-size: 20px;
        color: #ef2c5a;
        position:absolute;
        top: 42px;
        left: 0;
        right: 0;
    }
    .right-bar .item-icon{
        height: 60px;
        text-align: center;
        padding-top: 12px;
    }
    .item-icon .iconfont{
        color: #fff;
        font-size: 30px;
    }
    .item-icon p{
        color: #fff;
        font-size: 5px;
        padding-top: 5px;
    }
    .rightbar-item .right-music{
        height: 54px;
        width: 54px;
        background: #000;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: round 6s 0s linear infinite;
    }
    .right-music img{
        height: 30px;
        width: 30px;
        border-radius: 50%;
    }
    @keyframes round {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
</style>
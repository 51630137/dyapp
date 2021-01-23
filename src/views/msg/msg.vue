<template>
    <div class="message">
        <my-header :title="msgTitle" :rightTxt="MsgRightTxt" :hasRight="MsgHasRight"></my-header>
        <div class="msg-warp">
            <div class="mag-nav">
                <div class="mag-nav-item">
                    <div class="icon-box"> <span></span></div>
                    <p>粉丝</p>
                </div>
                <div class="mag-nav-item">
                    <div class="icon-box"><span></span></div>
                    <p>赞</p>
                </div>
                <div class="mag-nav-item">
                    <div class="icon-box"> <span></span></div>
                    <p>@我的</p>
                </div>
                <div class="mag-nav-item">
                    <div class="icon-box"><span></span></div>
                    <p>评论</p>
                </div>
            </div>
            <div class="msg-ab">
                <img src="../../static/img/img11.jpg" alt="">
            </div>
            <div class="down">
                <div>抖音好友圈</div>
                <div>
                    <button class="btn">下载</button>
                </div>
            </div>
            <div class="msg-list-box">
                <div class="msg-list">
                    <img src="../../static/img/img11.jpg" alt="">
                    <div class="user-des">
                        <div class="top">
                            <span>抖音小助手</span>
                            <span>12：23</span>
                        </div>
                        <div class="top top-mag">
                            <span>抖音安安全课堂</span>
                            <span class="no-see"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import myHeader from '../../components/header/myHeader'
export default {
 components:{
     myHeader
 },
 data(){
     return{
         msgTitle:'消息',
         MsgRightTxt:'发起聊天',
         MsgHasRight:true
     }
 }   
}
</script>
<style scoped>
.message{
  height: 640px;
}
.msg-warp{
    padding: 0 20px;
    color: #fff;
    background-color: #101821;
    height: 100%;
}
.mag-nav{
    padding: 20px 5px;
    display: flex;
    justify-content: space-between;
}
.mag-nav-item{
    text-align: center;
    width: 60px;
}
.icon-box{
    width: 60px;
    height: 60px;
    background-color: red;
    border-radius: 5px;
    margin-bottom: 5px;
}
.msg-ab{
    padding: 20px 0;
    border-top: 1px #242630 solid;
    border-bottom: 1px #242630 solid ;
}
.msg-ab img{
    height: 120px;
    width: 100%;
}
.down{
    padding: 20px 0;
    color: #ccc;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #242630 solid;
}
.down .btn{
    padding: 8px 25px;
    border:none;
    background-color: #fe2c55;
    color: #fff;
    border-radius: 2px;
}
.msg-list-box{
    padding-top: 30px;
}
.msg-list{
    display: flex;
    padding: 10px 0;
}
.msg-list img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.user-des{
    flex: 1;
    height: 60px;
}
.user-des .top{
    font-size: 14px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    line-height: 25px;
}
.top-mag{
    color: #666;
    align-items: center;
}
.no-see{
    width: 8px;
    height:8px;
    border-radius: 50%;
    background-color: #face15;
}

</style>
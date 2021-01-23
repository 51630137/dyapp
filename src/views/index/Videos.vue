<template>
    <div class="videos">
 <video-player  class="video-player vjs-default-skin vjs-big-play-centered"
          ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player>  
    </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player'
export default {
    name:"Videos",
    props:['videoList','index'],
    components:{
        videoPlayer
    },
    data(){
        return{
            playerOptions : {
               // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', 
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [
                        {
                            src: this.videoList.url,  // 路径
                            type: 'video/mp4'  // 类型
                        }, 
                    ],
                    //poster: "../../static/images/test.jpg", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar:false
                },
            playing:true
        }
    },
    methods:{
        playOrStop(){
            if(this.playing){
                this.$refs.videoPlayer.player.pause();
                this.playing=false
            }
            else{
                 this.$refs.videoPlayer.player.play();
                 this.playing=true
            }
        },
        //自动播放第一个视频
        autoplayAction(){
            if(this.index==0){
                this.playerOptions.autoplay=true
            }
        },
        play(){
            //重新加载播放，
            this.$refs.videoPlayer.player.load()
            this.$refs.videoPlayer.player.play()
            this.playing=true;
        },
        stop(){
            this.$refs.videoPlayer.player.pause()
            this.playing=false
        }
    },
    created(){
        // this.autoplayAction();
    }
}
</script>
<style >
.videos{
    position: relative;
}
.videos .vjs-default-skin > .video-js .vjs-big-play-button{
    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 35px;
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%,-50%);
}
</style>
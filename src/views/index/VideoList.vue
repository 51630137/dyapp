<template>
  <div class="video-list">
    <swiper :options="swiperOption">
      <!-- 幻灯内容 -->
      <swiper-slide v-for="(item, index) in dataList" :key="index">
        <div>
          <videos ref="videos" :videoList="item" :index="index"></videos>
        </div>
        <div class="infobar_warp">
          <info-bar></info-bar>
        </div>
        <div class="rightbar_warp">
          <right-bar @changeCom="showComs" ></right-bar>
        </div>
      </swiper-slide>
    </swiper>
    <!-- 评论 -->
     <transition name="up">
    <div class="comment-warp-box" v-if="showComment">
    <div class="comment-warp">
        <div class="comment-list">
          <div class="comment-top">
            <div class="number">15.0w条评论</div>
            <div class="close" @click="close"><span>x</span></div>
          </div>
          <div class="comment-body">
            <div class="comment-box">
                <div class="comment-item">
                    <div class="user-pic"><img src="../../static/img/xxx.jpg" alt=""></div>
                    <div class="item-info">
                     <div class="reply">
                       <p class="name">前端切图仔</p>
                       <p class="reply-des">求今晚不要加班<span class="time">03-19</span></p>
                     </div>
                     <div class="zan">
                       <span class="iconfont icon-aixin"><p>200</p></span>
                     </div>
                    </div>
                </div>
                <div class="sub-comment-item">
                    <div class="user-pic"><img src="../../static/img/xxx.jpg" alt=""></div>
                    <div class="item-info">
                     <div class="reply">
                       <p class="name">前端切图仔</p>
                       <p class="reply-des">
                        <span>回复:</span>
                        <span class="re-name">前端切图仔</span>
                        <span>不加班不加班</span>
                         <span class="time">03-19</span>
                       </p>
                     </div>
                     <div class="zan">
                       <span class="iconfont icon-aixin"><p>200</p></span>
                     </div>
                    </div>
                </div>
                <div class="more">------------展开60条回复</div>
            </div>
          </div>
          <div class="comment-body">
            <div class="comment-box">
                <div class="comment-item">
                    <div class="user-pic"><img src="../../static/img/xxx.jpg" alt=""></div>
                    <div class="item-info">
                     <div class="reply">
                       <p class="name">前端切图仔</p>
                       <p class="reply-des">求今晚不要加班<span class="time">03-19</span></p>
                     </div>
                     <div class="zan">
                       <span class="iconfont icon-aixin"><p>200</p></span>
                     </div>
                    </div>
                </div>
                <div class="sub-comment-item">
                    <div class="user-pic"><img src="../../static/img/xxx.jpg" alt=""></div>
                    <div class="item-info">
                     <div class="reply">
                       <p class="name">前端切图仔</p>
                       <p class="reply-des">
                        <span>回复:</span>
                        <span class="re-name">前端切图仔</span>
                        <span>不加班不加班</span>
                         <span class="time">03-19</span>
                       </p>
                     </div>
                     <div class="zan">
                       <span class="iconfont icon-aixin"><p>200</p></span>
                     </div>
                    </div>
                </div>
                <div class="more">------------展开60条回复</div>
            </div>
          </div>
          <div class="comment-body">
            <div class="comment-box">
                <div class="comment-item">
                    <div class="user-pic"><img src="../../static/img/xxx.jpg" alt=""></div>
                    <div class="item-info">
                     <div class="reply">
                       <p class="name">前端切图仔</p>
                       <p class="reply-des">求今晚不要加班<span class="time">03-19</span></p>
                     </div>
                     <div class="zan">
                       <span class="iconfont icon-aixin"><p>200</p></span>
                     </div>
                    </div>
                </div>
                <div class="sub-comment-item">
                    <div class="user-pic"><img src="../../static/img/xxx.jpg" alt=""></div>
                    <div class="item-info">
                     <div class="reply">
                       <p class="name">前端切图仔</p>
                       <p class="reply-des">
                        <span>回复:</span>
                        <span class="re-name">前端切图仔</span>
                        <span>不加班不加班</span>
                         <span class="time">03-19</span>
                       </p>
                     </div>
                     <div class="zan">
                       <span class="iconfont icon-aixin"><p>200</p></span>
                     </div>
                    </div>
                </div>
                <div class="more">------------展开60条回复</div>
            </div>
          </div>
          </div>
          <!-- 评论框 -->
          <div class="reply-input">
            <input type="text" placeholder="留下你的精彩评论">
            <span class="emoji">@</span>
            <span class="iconfont icon-pinglun"></span>
          </div>
        </div>
    </div>
     </transition>
  </div>
</template>
<script>
import "swiper/swiper-bundle.css";
import Videos from "./Videos.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import InfoBar from "./InfoBar.vue";
import RightBar from "./RightBar.vue";
export default {
  name: "VideoList",
  components: {
    Swiper, //定义组件
    SwiperSlide,
    Videos,
    InfoBar,
    RightBar,
  },
  data() {
    return {
      showComment:false,
      page: 1,
      swiperOption: {
        direction: "vertical",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0,
        observeParents: true,
        on: {
          tap: () => {
            // console.log("aaa");//点击区域
           this.playAction(this.page-1)
          },
          slideNextTransitionStart: () => {
            this.page += 1;
            this.nextVideo(this.page-1)
            console.log(this.page);
          },
          slidePrevTransitionEnd: ()=> {
            if(this.page>1){
              this.page -= 1;
               this.prevVideo(this.page-1)
              console.log(this.page);
            }
          },
        },
      },
      dataList: [
        {
          id: "1",
          url:
            "http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4",
        },
        {
          id: "2",
          url:
            "http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4",
        },
        {
          id: "3",
          url:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4",
        },
        {
          id: "4",
          url:
            "http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4",
        },
      ],
    };
  },
  methods: {
    playAction(index) {
      this.$refs.videos[index].playOrStop();
    },
    nextVideo(index){
      this.$refs.videos[index-1].stop()
      this.$refs.videos[index].play()
    },
    prevVideo(index){
       this.$refs.videos[index+1].stop()
      this.$refs.videos[index].play()
    },
    showComs(){
    this.showComment=true;
  },
  close(){
    this.showComment=false;
  }
  },
  
};
</script>
<style scoped>
#video-list {
  height: 100%;
}
#video-list .swiper-container {
  height: 100%;
  position: relative;
}
.infobar_warp {
  position: absolute;
  bottom: 55px;
  left: 0;
}
.rightbar_warp {
  position: absolute;
  right: 10px;
  bottom: 50px;
}
/* 评论 */
.up-enter-active, .up-leave-active {
  transition: all .5s;
}
.up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(100%);
}
.comment-warp-box{
  position: fixed;
  bottom: 0px;
  left: 0;
  height: 500px;
  width: 100%;
  background: #fff;
  z-index: 88;
}
.comment-warp{
  position: fixed;
  bottom: 60px;
  left: 0;
  height: 500px;
  width: 100%;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 999;
  padding: 10px 10px;
  box-sizing: border-box;
  overflow:auto;
}

.comment-top{
  display: flex;
  align-items: center;
}
.comment-box{
  margin-top: 20px;
}
.number{
  flex: 1;
  text-align: center;
}
.close{
  padding-right:10px ;
  font-size: 30px;
  color: #666;
}
.comment-body{
  max-width: 450px;
  margin-top: 20px;
}
.comment-item{
  display: flex;
}
.user-pic img{
  width: 33px;
  height: 33px;
  border-radius: 50%;
}
.item-info{
  margin-left: 10px;
  display: flex;
  flex: 1 1 auto;
}
.reply{
  width: 90%;
}
.reply-des{
  line-height: 24px;
}
.reply .name{
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}
.reply .time{
  color: #666;
}
.zan .iconfont{
  font-size: 20px;
  color: #ccc;
  margin: 0 10px;
}
.zan  p{
  font-size: 5px;
  color: #666;
  margin-top: 5px;
  padding-left: 10px;
}
.sub-comment-item{
  display: flex;
  margin-left: 33px;
  margin-top: 10px;
}
.re-name{
  padding:0 10px;
  color: #666;
}
.more{
  margin-left: 33px ;
  margin-top: 20px;
}
.reply-input{
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  display: flex;
  align-items: center;
}
.reply-input input{
  line-height: 40px;
  width: 70%;
  border: none;
  padding: 0 10px;
}
.reply-input .emoji{
  font-size: 30px;
  color: #ccc;
  margin-right: 6%;
}
.reply-input .iconfont{
  font-size: 26px;
  color: #ccc;
}
</style>

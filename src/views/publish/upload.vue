<template>
  <div class="upload">
    <div class="pub-top">
      <div class="back">
        <span>x</span>
      </div>
      <div><span class="iconfont"></span><span>所有照片</span></div>
      <div class="rightbtn">
        <span @click="toNext">下一步</span>
      </div>
    </div>
    <div class="upload-tab">
      <div class="nav-bar">
        <div
          class="item"
          @click="changeTab(0)"
          :class="indexTab == 0 ? 'active' : ''"
        >
          视频
        </div>
        <div
          class="item"
          @click="changeTab(1)"
          :class="indexTab == 1 ? 'active' : ''"
        >
          图片
        </div>
      </div>
      <div class="tab-wrap">
        <div class="tab-con" v-show="indexTab === 0">
          <div class="file-btn">
            <a class="btn"> <input type="file" class="hide" />更多视频 </a>
          </div>
          <div class="tab-video" v-for="(item, index) in dataList" :key="index">
            <div class="tab-v"><video :src="item.url"></video></div>
          </div>
          <div class="no">暂无视频1</div>
        </div>
        <div class="tab-con" v-show="indexTab === 1">
          <div class="file-btn">
            <a class="btn"> <input type="file" class="hide" />更多图片 </a>
          </div>
          <div class="tab-img-box">
            <div class="tab-img">
              <img src="../../static/img/xxx.jpg" />
              <div class="sel-icon">
                <span>1</span>
              </div>
            </div>
            <div class="tab-img">
              <img src="../../static/img/xxx.jpg" />
              <div class="sel-icon">
                <span>1</span>
              </div>
            </div>
            <div class="tab-img">
              <img src="../../static/img/xxx.jpg" />
              <div class="sel-icon">
                <span>1</span>
              </div>
            </div>
            <div class="tab-img">
              <img src="../../static/img/xxx.jpg" />
              <div class="sel-icon">
                <span>1</span>
              </div>
            </div>
            <div class="tab-img">
              <img src="../../static/img/xxx.jpg" />
              <div class="sel-icon">
                <span>1</span>
              </div>
            </div>
          </div>
          <div class="no">暂无视频2</div>
        </div>
      </div>

    </div>
    <!-- 发布填信息 -->
    <div class="edit-pub" v-if="editShow">
      <my-header title="发布" :hasLeft="true">
      </my-header>
       <div class="text-warp">
          <div class="text-box">
            <div class="text-contr">
              <textarea cols="30" rows="5" placeholder="写标题并使用的话题，能让更多人看到"></textarea>
              <button>#话题</button>
              <button>@好友</button>
            </div>
            <div class="sele-img">
              <img src="../../static/img/xxx.jpg" alt="">
            </div>
          </div>
          <div class="edit-box">
            <div class="edit-item">
              <span class="label"> <span></span>位置 {{path}}</span>
              <span>名字<span class="icon">></span></span>
            </div>
            <div class="edit-item">
             <span class="label"> <span></span> 谁可以看</span>
              <span>公开<span class="icon">></span></span>
            </div>
          </div>
          <div class="pub-save">
            <button class="lg-btn save-btn">草稿</button>
            <button class="lg-btn p-btn">发布</button>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import AMap from 'AMap'
import myHeader from '../../components/header/myHeader.vue'
export default {
  components:{
    myHeader
  },
  data() {
    return {
      editShow:false,
      path:'',
      indexTab: 0,
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
        {
          id: "5",
          url:
            "http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4",
        },
        {
          id: "6",
          url:
            "http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4",
        },
      ],
    };
  },
  created(){
    this.getLoaction()
    this.postimg()
  },
  methods: {
    //视频截帧
    postimg(){
      var post1="http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4?x-oss-process=video/snapshot,t_7000,f_jpg,w_800,h_600,m_fast"
      console.log(post1)
    },
    changeTab(index) {
      this.indexTab = index;
      console.log(index);
    },
    toNext(){
      this.editShow=true
    },
    getLoaction(){
      let _this=this
      AMap.plugin('AMap.CitySearch', function () {
  var citySearch = new AMap.CitySearch()
  citySearch.getLocalCity(function (status, result) {
    console.log(result)
    if (status === 'complete' && result.info === 'OK') {
      // 查询成功，result即为当前所在城市信息
      _this.path=result.city
    }
  })
})
    }
  },
};
</script>
<style scoped>
.pub-top {
  height: 44px;
  line-height: 44px;
  display: flex;
  justify-content: center;
  color: #000;
  font-size: 16px;
  position: relative;
}
.back {
  position: absolute;
  left: 10px;
}
.back span {
  font-size: 28px;
}
.upload-tab .nav-bar {
  display: flex;
  align-items: center;
}
.upload-tab .nav-bar .item {
  width: 50%;
  text-align: center;
  padding: 14px 0;
}
.upload-tab .nav-bar .active {
  border-bottom: 2px #f4cb18 solid;
}
.tab-con {
  display: flex;
  flex-wrap: wrap;
}
.tab-video {
  width: 25%;
}
.tab-video video {
  height: 160px;
}
.file-btn {
  position: fixed;
  bottom: 60px;
  left: 20px;
}
.file-btn .btn {
  outline: none;
  background-color: #fff;
  border: 1px #ccc solid;
  padding: 12px 20px;
  border-radius: 30px;
  box-shadow: 3px 3px 3px #ccc;
}
.file-btn .btn .hide {
  width: 80px;
  opacity: 0;
  position: absolute;
}
.no {
  height: 100%;
  text-align: center;
  padding-top: 50%;
  width: 100%;
}
.tab-img-box {
  display: flex;
  flex-wrap: wrap;
}
.tab-img-box .tab-img {
  width: 25%;
  position: relative;
}
.tab-img-box .tab-img img {
  width: 100%;
}
.tab-img-box .tab-img .sel-icon {
  position: absolute;
  top: 5%;
  color: #fff;
  width: 20px;
  text-align: center;
  right: 10px;
  border-radius: 50%;
  height: 20px;
  border: 1px #ccc soild;
  background: rgba(0, 0, 0, 0.3);
}
/*  */
.edit-pub{
  background: #161824;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  color: #fff;
}
.text-warp{
  padding: 0 10px;
  box-sizing: border-box;
}
.text-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px #282a36 solid;
}
.text-contr{
  width: 80%;
}
.text-contr textarea{
  background: #161824;
  border: none;
}
.text-contr button{
  border-radius: 4px;
  background: #3a3a44;
  border: none;
  padding: 8px 12px;
  margin-right: 10px;
}
.sele-img img{
  height: 130px;
  width: 100px;
}
.edit-item{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
}
.edit-item .label{
    color: #fff;
}
.edit-item .icon{
    margin-left: 10px;
}
.pub-save{
  position: fixed;
  bottom: 40px;
  width: 100%;
  padding: 0 10px;
}
.pub-save .lg-btn{
  border: none;
  width: 44%;
  padding: 15px 0;
}
.pub-save .save-btn{
  margin-right: 1%;
  background-color: #3a3a44;
}
.pub-save .p-btn{
  background-color: #fe2b54;
}
.rightbtn{
  margin-left:10px ;
  background: #fe2b54;
  color: #eeeeee;
}
</style>
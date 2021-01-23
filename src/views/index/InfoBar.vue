<template>
  <div class="info-bar">
    <div class="infobar-item"><span>@烧开水</span></div>
    <div class="infobar-item"><span>vue-cli3.7实现仿抖音</span></div>
    <div class="infobar-item music-item">
      <span class="iconfont icon-yinfu"></span>
      <div class="music-name">
        <span data-text="烧开水制作">烧开水制作</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.info-bar {
  color: #fff;
  font-size: 16px;
  padding-left: 10px;
}
.info-bar .infobar-item {
  padding: 5px 0;
}
.icon-yinfu {
  margin-right: 5px;
}
.music-item{
    display: flex;
}
.music-item .music-name{
    width: 150px;
    /* border: 1px red solid; */
    white-space: nowrap;
    overflow: hidden;
}
.music-item .music-name span{
    display: inline-block;
    animation: scroll 5s linear infinite;
}
.music-item .music-name span::after{
    contain: attr(data-text);
    margin-left: 50px;
}
@keyframes scroll {
    from{
        transform: translateX(0);
    }
    to{
        /* 偏移calc */
        transform: translateX(calc(-50% - 20px));
    }   
}
</style>
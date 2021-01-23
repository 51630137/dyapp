<template>
    <div class="table-bar">
        <div class="item" @click="changeTab(0)">
            <router-link to="/index" :class="tableIndex===0 ?'active':'' ">首页</router-link>
        </div>
        <div class="item" @click="changeTab(1)">
            <router-link to="/follow" :class="tableIndex===1 ?'active':'' ">熟人</router-link>
        </div>
        <div class="item" @click="changeTab(2)"><router-link to="/publish" :class="tableIndex===2 ?'active':'' ">+</router-link></div>
        <div class="item" @click="changeTab(3)"><router-link to="/msg" :class="tableIndex===3 ?'active':'' ">消息</router-link></div>
        <div class="item" @click="changeTab(4)"><router-link to="/sign" :class="tableIndex===4 ?'active':'' ">我</router-link></div>
    </div>
</template>
<style scoped>
    .table-bar{
        height: 50px;
        line-height: 50px;
        width: 100%;
        /* background: #000; */
        position: fixed;
        bottom: 0;
        left: 0;
        color: #ccc;
        font-size: 16px;
        display: flex;
        justify-items: center;
        /* 底部导航栏优先级 */
        z-index: 2;
    }
    .table-bar .item{
        flex: 1;
        text-align: center;
    }
    .table-bar .item .active{
       color: #aa944a;
    }
    a {  text-decoration: none;
     color: #ccc}
</style>
<script>
export default {
    data(){
        return{
            tableIndex:0
        }
    },
    methods:{
        changeTab(index){
            this.tableIndex=index
            console.log(index)
        }
    }
}
</script>

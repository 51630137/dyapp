<template>
    <div class="user-header">
        <div class="back" v-if="hasLeft" @click="goback">
            <span class="">←</span>
        </div>
        <div class=""><span>{{title}}</span></div>
        <div class="right" v-if="hasRight">
            <span class="">{{rightTxt}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:{
        title:{
            type:String,
            required:true
        },
        rightTxt:{
            type:String,
            required:true
        },
        hasLeft:{
            type:Boolean,
            required:false
        },
        hasRight:{
            type:Boolean,
            required:false
        }
    },
    methods:{
        goback(){
            this.$emit('changeBack')
        }
    }
}
</script>
<style scoped>
 .user-header{
     height: 48px;
     width: 100%;
     line-height: 48px;
     display: flex;
     justify-content: center;
     border-bottom: 1px #292831 solid;
     background-color: #101821;
     color: #eee;
     position: relative;
 }
 .back{
     position: absolute;
     left: 10px;
 }
 .right{
     position: absolute;
     right: 10px;
 }
</style>
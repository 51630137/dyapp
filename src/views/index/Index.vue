<template>
    <div class="indexwarp">
       
       <top-bar></top-bar>
       <router-view/>
    </div>
</template>

<script>
import TopBar from './TopBar.vue'
export default {
    data(){
        return{}
    },
    components:{
        TopBar
    }
}
</script>
<style scoped>
    .indexwarp{
        height: 100%;
        background: #000;
    }
</style>
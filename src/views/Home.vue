<template>
  <div class="home">
   <router-view/>
    <tab-bar></tab-bar>
  </div>
  
</template>

<script>
// @ is an alias to /src
import TabBar from './home/TabBar.vue'

export default {
  name: 'Home',
  components: {
    TabBar
  },
  data(){
    return{

    }
  }
}
</script>

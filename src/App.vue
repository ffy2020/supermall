<template>
  <div id="app">
    <router-view></router-view>
    <mainTabBar></mainTabBar>

  </div>
</template>
<script>

import mainTabBar from '@/components/content/mainTabBar'


export default {
  name: "App", 
  components:{
    mainTabBar
  }
  
};
</script>

<style>
 @import "assets/css/base.css";
</style>

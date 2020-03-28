<template>
  <div class="tab-bar-item" @click="itmeClick">
    <slot v-if="!IsActive" name="tab-item-icon"></slot>
    <slot v-else name="tab-item-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="tab-item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activecolor:{
    type:String,
    default:'red'

    }
  },
  data() {
    return{

    }
  },
  computed:{
    IsActive(){
      return  this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.IsActive?{color:this.activecolor}:{}
    }
  },
methods:{
 itmeClick(){
  this.$router.replace(this.path)
 }


}
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>

<style >
</style>
